'use client';

import { gsap, useGSAP } from '@/lib/gsap';
import { Project } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

type Props = {
  projects: Project[];
  activeIndex: number | null;
};

/**
 * Single shared, cursor-following preview for the whole project list.
 * Only rendered on fine-pointer devices without reduced motion.
 */
export const ProjectHoverPreview = ({ projects, activeIndex }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const moveX = useRef<((value: number) => void) | null>(null);
  const moveY = useRef<((value: number) => void) | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.92 });
      moveX.current = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
      moveY.current = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });
    },
    { scope: ref }
  );

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      moveX.current?.(e.clientX);
      moveY.current?.(e.clientY);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      opacity: activeIndex === null ? 0 : 1,
      scale: activeIndex === null ? 0.92 : 1,
      duration: 0.35,
      ease: 'power3.out',
    });
  }, [activeIndex]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30 w-[26rem] overflow-clip rounded-sm opacity-0"
    >
      <div className="relative aspect-[3/2]">
        {projects.map((project, index) => (
          <Image
            key={project.title}
            src={project.image}
            alt=""
            fill
            sizes="26rem"
            className={cn(
              'object-cover transition-opacity duration-300',
              activeIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          />
        ))}
      </div>
    </div>
  );
};

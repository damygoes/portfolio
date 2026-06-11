'use client';

import { MOTION_OK, POINTER_FINE } from '@/lib/animations';
import { gsap, useGSAP } from '@/lib/gsap';
import { cn } from '@/lib/utils';
import { useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** How far the element follows the cursor, 0–1. */
  strength?: number;
};

export function Magnetic({ children, className, strength = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(`${MOTION_OK} and ${POINTER_FINE}`, () => {
        const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3' });
        const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3' });

        const onMove = (e: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          xTo((e.clientX - (rect.left + rect.width / 2)) * strength);
          yTo((e.clientY - (rect.top + rect.height / 2)) * strength);
        };
        const onLeave = () => {
          xTo(0);
          yTo(0);
        };

        el.addEventListener('pointermove', onMove);
        el.addEventListener('pointerleave', onLeave);
        return () => {
          el.removeEventListener('pointermove', onMove);
          el.removeEventListener('pointerleave', onLeave);
        };
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={cn('inline-block', className)}>
      {children}
    </div>
  );
}

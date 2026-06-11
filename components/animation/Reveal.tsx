'use client';

import { DURATION, EASE, MOTION_OK } from '@/lib/animations';
import { gsap, useGSAP } from '@/lib/gsap';
import { cn } from '@/lib/utils';
import { useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Pass null to play immediately on mount instead of on scroll. */
  start?: string | null;
};

export function Reveal({
  children,
  className,
  delay = 0,
  start = 'top 88%',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(ref.current, {
          opacity: 0,
          y: 24,
          duration: DURATION.base,
          ease: EASE,
          delay,
          scrollTrigger:
            start === null
              ? undefined
              : { trigger: ref.current, start, once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

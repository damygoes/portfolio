'use client';

import { DURATION, MOTION_OK } from '@/lib/animations';
import { gsap, useGSAP } from '@/lib/gsap';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

type Props = {
  className?: string;
};

/** Horizontal rule that draws in from the left when scrolled into view. */
export function DrawnLine({ className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(ref.current, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: DURATION.slow,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: ref.current, start: 'top 92%', once: true },
        });
      });
    },
    { scope: ref }
  );

  return <div ref={ref} className={cn('h-px w-full bg-border', className)} />;
}

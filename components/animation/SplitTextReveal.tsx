'use client';

import { DURATION, EASE, MOTION_OK, STAGGER } from '@/lib/animations';
import { SplitText, gsap, useGSAP } from '@/lib/gsap';
import { cn } from '@/lib/utils';
import { createElement, useRef, type ElementType, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  /**
   * ScrollTrigger start position. Pass null to play immediately on mount
   * (above-the-fold content like the hero wordmark).
   */
  start?: string | null;
};

export function SplitTextReveal({
  children,
  as = 'div',
  className,
  delay = 0,
  start = 'top 85%',
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        let split: SplitText | undefined;
        let cancelled = false;
        document.fonts.ready.then(() => {
          // The context may have been cleaned up (e.g. StrictMode remount)
          // before fonts resolved — never split against a stale mount.
          if (cancelled || !ref.current) return;
          split = SplitText.create(ref.current, {
            type: 'lines',
            mask: 'lines',
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 110,
                duration: DURATION.base,
                ease: EASE,
                stagger: STAGGER,
                delay,
                scrollTrigger:
                  start === null
                    ? undefined
                    : { trigger: ref.current, start, once: true },
              }),
          });
        });
        return () => {
          cancelled = true;
          split?.revert();
        };
      });
    },
    { scope: ref }
  );

  return createElement(as, { ref, className: cn(className) }, children);
}

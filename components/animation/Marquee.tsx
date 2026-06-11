'use client';

import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  /** Seconds for one full loop. */
  speed?: number;
};

/**
 * CSS-keyframe marquee: the track is rendered twice and translated -50%,
 * so the loop is seamless. Under prefers-reduced-motion the animation is
 * disabled via CSS and the first track shows as a static row.
 */
export function Marquee({ children, className, reverse, speed = 40 }: Props) {
  return (
    <div className={cn('overflow-clip', className)}>
      <div
        className={cn(
          'marquee-track flex w-max items-center',
          reverse && 'marquee-track-reverse'
        )}
        style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
      >
        <div className="flex items-center" aria-hidden={false}>
          {children}
        </div>
        <div className="flex items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

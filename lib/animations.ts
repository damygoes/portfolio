export const EASE = 'power4.out';

export const DURATION = {
  fast: 0.5,
  base: 0.9,
  slow: 1.2,
};

export const STAGGER = 0.08;

/**
 * Media query gate used with gsap.matchMedia() so every effect is
 * skipped for users who prefer reduced motion.
 */
export const MOTION_OK = '(prefers-reduced-motion: no-preference)';

export const POINTER_FINE = '(pointer: fine)';

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

'use client';

import { prefersReducedMotion } from '@/lib/animations';
import { ScrollTrigger, gsap } from '@/lib/gsap';
import Lenis from 'lenis';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Native scrolling for users who prefer reduced motion
    if (prefersReducedMotion()) return;

    const instance = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    instance.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    setLenis(instance);

    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  // Late layout changes (font swaps, images, expanding rows) invalidate
  // ScrollTrigger positions; refresh whenever the document height changes.
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let lastHeight = document.body.offsetHeight;
    const observer = new ResizeObserver(() => {
      const height = document.body.offsetHeight;
      if (height === lastHeight) return;
      lastHeight = height;
      clearTimeout(timeout);
      timeout = setTimeout(() => ScrollTrigger.refresh(), 200);
    });
    observer.observe(document.body);
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

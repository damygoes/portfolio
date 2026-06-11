'use client';

import { useLenis } from '@/components/providers/SmoothScrollProvider';
import { sections } from '@/lib/constants';
import { useCallback, useEffect, useState } from 'react';

const NAV_OFFSET = -80;

export function useScrollSection() {
  const [activeSection, setActiveSection] = useState('hero');
  const lenis = useLenis();

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.2, // good balance: 20% of section visible triggers it
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id);
      }
    }, options);

    const elements: HTMLElement[] = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        elements.push(element);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (!element) return;

      if (lenis) {
        // force: scroll even if Lenis is stopped (e.g. mobile menu just closed)
        lenis.scrollTo(element, { offset: NAV_OFFSET, force: true });
      } else {
        const y =
          element.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    },
    [lenis]
  );

  return { activeSection, scrollToSection };
}

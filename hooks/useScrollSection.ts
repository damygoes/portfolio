"use client"

import { sections } from '@/lib/constants';
import { useEffect, useState } from "react";

export function useScrollSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.2, // good balance: 20% of section visible triggers it
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
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
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // adjust if you have a sticky navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return { activeSection, scrollToSection };
}
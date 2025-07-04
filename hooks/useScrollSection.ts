"use client"

import { sections } from '@/lib/constants';
import { useEffect, useState } from "react";

export function useScrollSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {

    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // 50% of section visible triggers intersection
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return { activeSection, scrollToSection };
}

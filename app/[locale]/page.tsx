'use client';

import Navbar from '@/components/layout/Navbar';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillSection';
import { useScrollSection } from '@/hooks/useScrollSection';
import { ScrollTrigger } from '@/lib/gsap';
import { useEffect } from 'react';

export default function Portfolio() {
  const { activeSection, scrollToSection } = useScrollSection();

  // Restore scroll position if saved (e.g. after a locale switch).
  // Runs before Lenis initializes; Lenis syncs from the native scroll
  // position, so a plain window.scrollTo is safe here.
  useEffect(() => {
    const savedScrollY = sessionStorage.getItem('scrollY');
    if (savedScrollY !== null) {
      window.scrollTo({ top: parseInt(savedScrollY, 10), behavior: 'auto' });
      sessionStorage.removeItem('scrollY'); // Clean up after restoring
      ScrollTrigger.refresh();
    }
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}

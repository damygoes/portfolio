'use client';

import Navbar from '@/components/layout/Navbar';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillSection';
import { useScrollSection } from '@/hooks/useScrollSection';
import { useEffect } from 'react';

export default function Portfolio() {
  const { activeSection, scrollToSection } = useScrollSection();

  // Restore scroll position if saved
  useEffect(() => {
    const savedScrollY = sessionStorage.getItem('scrollY');
    if (savedScrollY !== null) {
      window.scrollTo({ top: parseInt(savedScrollY, 10), behavior: 'auto' });
      sessionStorage.removeItem('scrollY'); // Clean up after restoring
    }
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}

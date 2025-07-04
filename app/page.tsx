"use client";

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillSection';
import { useScrollSection } from '@/hooks/useScrollSection';


export default function Portfolio() {
  const { activeSection, scrollToSection } = useScrollSection()

  return (
    <>
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection}/>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

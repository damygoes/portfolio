'use client';

import { navLinks } from '@/lib/constants';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { LanguageSwitch } from '../shared/language-switch/LanguageSwitch';
import { ModeToggle } from '../shared/ModeToggle';
import { Button } from '../ui/button';

type NavbarProps = {
  activeSection: string;
  scrollToSection: (id: string) => void;
};

const Navbar: FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const t = useTranslations('Navigation');
  return (
    <nav className="sticky top-4 z-50 backdrop-blur-sm w-fit mx-auto rounded-full px-8 py-4 bg-card shadow-md">
      <div className="flex justify-between items-center gap-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => scrollToSection('hero')}
        >
          <Button
            size="icon"
            variant="ghost"
            className="text-xl font-semibold transition-colors text-primary hover:text-foreground"
          >
            DB
          </Button>
        </motion.div>
        <div className="flex justify-between items-center gap-12 grow">
          <div className="hidden md:flex gap-2 justify-end">
            {navLinks.map((item) => (
              <Button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                variant={
                  activeSection === item.toLowerCase() ? 'link' : 'ghost'
                }
                className="hover:text-primary hover:bg-transparent"
              >
                {t(item)}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-4 justify-end">
            <ModeToggle />
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

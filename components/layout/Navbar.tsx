'use client';

import { DURATION, EASE, MOTION_OK } from '@/lib/animations';
import { navLinks } from '@/lib/constants';
import { gsap, useGSAP } from '@/lib/gsap';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { FC, useEffect, useRef, useState } from 'react';
import { LanguageSwitch } from '../shared/language-switch/LanguageSwitch';
import { ModeToggle } from '../shared/ModeToggle';
import { MobileMenu } from './MobileMenu';

type NavbarProps = {
  activeSection: string;
  scrollToSection: (id: string) => void;
};

const Navbar: FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const t = useTranslations('Navigation');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(ref.current, {
          y: -16,
          opacity: 0,
          duration: DURATION.base,
          ease: EASE,
          delay: 0.2,
        });
      });
    },
    { scope: ref }
  );

  return (
    <>
      <header
        ref={ref}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300',
          scrolled && !menuOpen
            ? 'border-b border-border bg-background/80 backdrop-blur-md'
            : 'border-b border-transparent'
        )}
      >
        <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="cursor-pointer font-mono text-sm font-semibold tracking-tight transition-colors hover:text-primary"
            aria-label="Damilola Bada — back to top"
          >
            DB<span className="text-primary">©</span>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() => scrollToSection(item)}
                className={cn(
                  'group cursor-pointer font-mono text-xs lowercase tracking-[0.12em] transition-colors',
                  activeSection === item
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <span className="mr-1 text-[0.6rem] text-primary/60">
                  0{index + 1}
                </span>
                {t(item)}
              </button>
            ))}
            <div className="flex items-center gap-4 border-l border-border pl-6">
              <ModeToggle />
              <LanguageSwitch />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="z-50 flex cursor-pointer items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? t('close') : t('menu')}
            <span className="relative flex h-2.5 w-5 flex-col justify-between">
              <span
                className={cn(
                  'h-px w-full bg-current transition-transform duration-300',
                  menuOpen && 'translate-y-[4.5px] rotate-45'
                )}
              />
              <span
                className={cn(
                  'h-px w-full bg-current transition-transform duration-300',
                  menuOpen && '-translate-y-[4.5px] -rotate-45'
                )}
              />
            </span>
          </button>
        </nav>
      </header>

      <MobileMenu
        open={menuOpen}
        activeSection={activeSection}
        onNavigate={(id) => {
          setMenuOpen(false);
          // Defer until the scroll lock is released and Lenis has re-measured
          // the document; scrolling mid-close also reads as one fluid motion.
          setTimeout(() => scrollToSection(id), 450);
        }}
      />
    </>
  );
};

export default Navbar;

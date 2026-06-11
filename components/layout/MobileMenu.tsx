'use client';

import { useLenis } from '@/components/providers/SmoothScrollProvider';
import { prefersReducedMotion } from '@/lib/animations';
import { gsap, useGSAP } from '@/lib/gsap';
import { navLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { FC, useEffect, useRef } from 'react';
import { LanguageSwitch } from '../shared/language-switch/LanguageSwitch';
import { ModeToggle } from '../shared/ModeToggle';

type Props = {
  open: boolean;
  activeSection: string;
  onNavigate: (id: string) => void;
};

export const MobileMenu: FC<Props> = ({ open, activeSection, onNavigate }) => {
  const t = useTranslations('Navigation');
  const lenis = useLenis();
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();
      tl.current = gsap
        .timeline({ paused: true })
        .to(containerRef.current, {
          yPercent: 100,
          duration: reduced ? 0 : 0.55,
          ease: 'power3.inOut',
        })
        .from(
          '[data-menu-link]',
          {
            yPercent: 120,
            duration: reduced ? 0 : 0.5,
            stagger: reduced ? 0 : 0.06,
            ease: 'power3.out',
          },
          reduced ? 0 : '-=0.2'
        );
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (open) {
      tl.current?.play();
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      tl.current?.reverse();
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = '';
    };
  }, [open, lenis]);

  return (
    <div
      id="mobile-menu"
      ref={containerRef}
      inert={!open}
      className="fixed inset-0 z-40 flex -translate-y-full flex-col justify-between bg-background px-5 pt-24 pb-10 md:hidden"
    >
      <nav className="flex flex-col gap-2">
        {navLinks.map((item, index) => (
          <div key={item} data-clip>
            <button
              type="button"
              data-menu-link
              onClick={() => onNavigate(item)}
              className={cn(
                'flex cursor-pointer items-baseline gap-3 py-1 text-left font-display text-5xl font-bold uppercase tracking-tight transition-colors',
                activeSection === item ? 'text-primary' : 'text-foreground'
              )}
            >
              <span className="font-mono text-xs text-primary/70">
                0{index + 1}
              </span>
              {t(item)}
            </button>
          </div>
        ))}
      </nav>

      <div className="flex items-center justify-between border-t border-border pt-6">
        <LanguageSwitch />
        <ModeToggle />
      </div>
    </div>
  );
};

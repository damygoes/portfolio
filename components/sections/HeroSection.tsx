'use client';

import { Magnetic } from '@/components/animation/Magnetic';
import { DURATION, EASE, MOTION_OK, STAGGER } from '@/lib/animations';
import { gsap, useGSAP } from '@/lib/gsap';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRef } from 'react';
import { Section } from '../layout/Section';

type Props = {
  scrollToSection: (id: string) => void;
};

const ctaClass =
  'group relative inline-flex items-center gap-1.5 pb-1 font-mono text-xs uppercase tracking-[0.15em] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100';

const HeroSection = ({ scrollToSection }: Props) => {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({ defaults: { ease: EASE } });
        tl.from('[data-hero-line]', {
          yPercent: 110,
          duration: DURATION.slow,
          stagger: STAGGER * 1.5,
          delay: 0.15,
        })
          .from(
            '[data-hero-meta]',
            { opacity: 0, y: 12, duration: DURATION.base, stagger: STAGGER },
            '-=0.7'
          )
          .from(
            '[data-hero-copy]',
            { opacity: 0, y: 16, duration: DURATION.base, stagger: STAGGER },
            '-=0.6'
          );

        gsap.to('[data-hero-arrow]', {
          y: 6,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    },
    { scope: ref }
  );

  return (
    <Section id="hero" className="py-0 md:py-0">
      <div
        ref={ref}
        className="flex min-h-svh flex-col justify-between pt-28 pb-8 md:pt-32"
      >
        <div className="text-meta flex flex-wrap gap-x-6 gap-y-1 text-muted-foreground">
          <span data-hero-meta>{t('location')}</span>
          <span data-hero-meta className="hidden sm:inline">
            ·
          </span>
          <span data-hero-meta>{t('role')}</span>
          <span data-hero-meta className="hidden sm:inline">
            ·
          </span>
          <span data-hero-meta>{t('experience')}</span>
        </div>

        <div>
          <h1 className="font-display text-[clamp(3.25rem,13vw,11.5rem)] font-extrabold uppercase leading-[0.86] tracking-tight">
            <span className="block" data-clip>
              <span className="block" data-hero-line>
                {t('firstName')}
              </span>
            </span>
            <span className="block" data-clip>
              <span className="text-stroke block" data-hero-line>
                {t('lastName')}
                <span className="text-primary [-webkit-text-stroke:0] [color:var(--primary)]">
                  .
                </span>
              </span>
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
            <p
              data-hero-copy
              className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {t('description')}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <div data-hero-copy>
                <Magnetic>
                  <button
                    type="button"
                    onClick={() => scrollToSection('projects')}
                    className={`${ctaClass} cursor-pointer text-foreground`}
                  >
                    {t('cta')}
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </Magnetic>
              </div>
              <div data-hero-copy>
                <Magnetic>
                  <Link
                    href={locale === 'de' ? '/lebenslauf.pdf' : '/resume.pdf'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${ctaClass} text-muted-foreground hover:text-foreground`}
                  >
                    {t('download_cv')}
                    <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>

        <div
          data-hero-copy
          className="text-meta flex items-center gap-2 text-muted-foreground"
        >
          <span>{t('scroll')}</span>
          <ArrowDown data-hero-arrow className="size-3.5" />
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;

'use client';

import { Magnetic } from '@/components/animation/Magnetic';
import { Reveal } from '@/components/animation/Reveal';
import { useLenis } from '@/components/providers/SmoothScrollProvider';
import { DURATION, EASE, MOTION_OK, STAGGER } from '@/lib/animations';
import { contacts } from '@/lib/constants';
import { gsap, useGSAP } from '@/lib/gsap';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { Section } from '../layout/Section';

const EMAIL = contacts
  .find((c) => c.title === 'Email')!
  .link.replace('mailto:', '');

const ContactSection = () => {
  const t = useTranslations('Contact');
  const lenis = useLenis();
  const ref = useRef<HTMLDivElement>(null);

  const socialLinks = contacts.filter((c) => c.title !== 'Email');

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from('[data-contact-line]', {
          yPercent: 110,
          duration: DURATION.slow,
          ease: EASE,
          stagger: STAGGER * 1.5,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 75%',
            once: true,
          },
        });
      });
    },
    { scope: ref }
  );

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Section id="contact" className="pb-0 md:pb-0">
      <div ref={ref} className="flex min-h-[80svh] flex-col justify-between">
        <div>
          <span className="text-meta block text-primary">(05)</span>

          <h2 className="mt-6 font-display text-[clamp(2.75rem,9vw,8rem)] font-extrabold uppercase leading-[0.9] tracking-tight">
            <span className="block" data-clip>
              <span className="block" data-contact-line>
                {t('line1')}
              </span>
            </span>
            <span className="block" data-clip>
              <span className="text-stroke block" data-contact-line>
                {t('line2')}
              </span>
            </span>
          </h2>

          <Reveal className="mt-8 max-w-xl">
            <p className="leading-relaxed text-muted-foreground">
              {t('subtitle')}
            </p>
          </Reveal>

          <Reveal className="mt-12 md:mt-16">
            <span className="text-meta block text-muted-foreground">
              {t('email_label')}
            </span>
            <Magnetic className="mt-3">
              <a
                href={`mailto:${EMAIL}`}
                className="group relative inline-block break-all font-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:origin-left hover:after:scale-x-100"
              >
                {EMAIL}
              </a>
            </Magnetic>
          </Reveal>

          <Reveal className="mt-10 flex gap-8">
            {socialLinks.map((contact) => (
              <a
                key={contact.title}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {contact.title}
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </Reveal>
        </div>

        <footer className="mt-24 border-t border-border py-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
              {t('copyright', { year: new Date().getFullYear() })}
            </p>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
              {t('built')}
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="group flex cursor-pointer items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-foreground transition-colors hover:text-primary"
            >
              {t('back_to_top')}
              <ArrowUp className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </footer>
      </div>
    </Section>
  );
};

export default ContactSection;

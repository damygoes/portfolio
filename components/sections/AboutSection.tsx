'use client';

import { Reveal } from '@/components/animation/Reveal';
import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Section } from '../layout/Section';

const AboutSection = () => {
  const t = useTranslations('About');

  return (
    <Section id="about">
      <SectionHeading index="01" title={t('title')} />

      <div className="grid gap-12 md:grid-cols-[5fr_7fr] md:gap-20">
        <div>
          <Reveal className="md:sticky md:top-32">
            <div className="group relative aspect-[4/5] overflow-clip rounded-sm">
              <Image
                src="/avatar.jpg"
                alt="Damilola Bada"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-top grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-8">
          <SplitTextReveal
            as="p"
            className="font-display text-2xl font-medium leading-snug md:text-3xl"
          >
            {t('paragraphs.one')}
          </SplitTextReveal>

          <Reveal>
            <p className="leading-relaxed text-muted-foreground">
              {t('paragraphs.two')}
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-muted-foreground">
              {t('paragraphs.three')}
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-muted-foreground">
              {t('paragraphs.four')}
            </p>
          </Reveal>

          <Reveal>
            <p className="leading-relaxed text-muted-foreground">
              {t('cta')}{' '}
              <a
                href="https://www.linkedin.com/in/damilolabada/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
              >
                {t('link')}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;

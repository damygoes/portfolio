'use client';

import { Marquee } from '@/components/animation/Marquee';
import { Reveal } from '@/components/animation/Reveal';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { skills } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Fragment } from 'react';
import { Section } from '../layout/Section';

const MarqueeItems = ({ items }: { items: string[] }) => (
  <>
    {items.map((skill, index) => (
      <Fragment key={skill}>
        <span
          className={cn(
            'whitespace-nowrap px-4 font-display text-4xl font-bold uppercase tracking-tight md:px-6 md:text-6xl',
            index % 2 === 1 && 'text-stroke'
          )}
        >
          {skill}
        </span>
        <span className="text-sm text-primary">✦</span>
      </Fragment>
    ))}
  </>
);

const SkillsSection = () => {
  const t = useTranslations('Skills');

  const bandOne = [...skills[0].skills, ...skills[1].skills];
  const bandTwo = [...skills[2].skills, ...skills[3].skills];

  return (
    <Section id="skills" contained={false}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading index="04" title={t('title')} />
      </div>

      <div className="flex flex-col gap-8 py-2 md:gap-12">
        <Marquee speed={45}>
          <MarqueeItems items={bandOne} />
        </Marquee>
        <Marquee reverse speed={55}>
          <MarqueeItems items={bandTwo} />
        </Marquee>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1440px] gap-10 px-5 sm:grid-cols-2 md:mt-24 md:px-10 lg:grid-cols-4">
        {skills.map((category) => (
          <Reveal key={category.title}>
            <h3 className="text-meta border-t border-border pt-4 text-primary">
              {t(`category.${category.title}`)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {category.skills.join(', ')}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;

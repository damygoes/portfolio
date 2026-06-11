'use client';

import { DrawnLine } from '@/components/animation/DrawnLine';
import { Reveal } from '@/components/animation/Reveal';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { Experience } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Section } from '../layout/Section';

const ExperienceRow = ({
  experience,
  defaultOpen,
  showLabel,
  hideLabel,
}: {
  experience: Experience;
  defaultOpen: boolean;
  showLabel: string;
  hideLabel: string;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Reveal>
      <div className="grid gap-3 py-8 md:grid-cols-[11rem_1fr_auto] md:gap-8 md:py-10">
        <span className="text-meta pt-1.5 text-muted-foreground">
          {experience.period}
        </span>

        <div>
          <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
            {experience.title}
            <span className="text-primary"> — {experience.company}</span>
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            {experience.description}
          </p>

          {experience.responsibilities.length > 0 && (
            <div
              className={cn(
                'grid transition-[grid-template-rows] duration-500 ease-in-out',
                open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <ul className="overflow-hidden">
                {experience.responsibilities.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 pt-3 text-sm leading-relaxed text-muted-foreground first:pt-5"
                  >
                    <span className="text-primary">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <span className="text-meta text-muted-foreground">
            {experience.location}
          </span>
          {experience.responsibilities.length > 0 && (
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="group flex cursor-pointer items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary"
            >
              {open ? hideLabel : showLabel}
              <Plus
                className={cn(
                  'size-3.5 transition-transform duration-300',
                  open && 'rotate-45'
                )}
              />
            </button>
          )}
        </div>
      </div>
    </Reveal>
  );
};

const ExperienceSection = () => {
  const t = useTranslations('Experience');
  const experiences = t.raw('experiences') as Experience[];
  const firstWithDetails = experiences.findIndex(
    (exp) => exp.responsibilities.length > 0
  );

  return (
    <Section id="experience">
      <SectionHeading index="02" title={t('title')} />

      <div>
        <DrawnLine />
        {experiences.map((exp, index) => (
          <div key={`${exp.title}-${exp.period}`}>
            <ExperienceRow
              experience={exp}
              defaultOpen={index === firstWithDetails}
              showLabel={t('show_details')}
              hideLabel={t('hide_details')}
            />
            <DrawnLine />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;

'use client';

import { DrawnLine } from '@/components/animation/DrawnLine';
import { Reveal } from '@/components/animation/Reveal';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MOTION_OK, POINTER_FINE } from '@/lib/animations';
import { Project } from '@/lib/types';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Section } from '../layout/Section';
import { ProjectHoverPreview } from '../projects/ProjectHoverPreview';
import { ProjectListItem } from '../projects/ProjectListItem';

const ProjectsSection = () => {
  const t = useTranslations('Projects');
  const projects = t.raw('projects') as Project[];

  const pointerFine = useMediaQuery(POINTER_FINE);
  const motionOk = useMediaQuery(MOTION_OK);
  const showHoverPreview = pointerFine && motionOk;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Section id="projects">
      <SectionHeading index="03" title={t('title')} />

      <div>
        <DrawnLine />
        {projects.map((project, index) => (
          <Reveal key={project.title}>
            <ProjectListItem
              project={project}
              index={index}
              onHoverChange={
                showHoverPreview
                  ? (hovering) => setActiveIndex(hovering ? index : null)
                  : undefined
              }
            />
            <DrawnLine />
          </Reveal>
        ))}
      </div>

      {showHoverPreview && (
        <ProjectHoverPreview projects={projects} activeIndex={activeIndex} />
      )}
    </Section>
  );
};

export default ProjectsSection;

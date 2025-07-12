'use client';

import { SectionHeading } from '@/components/layout/SectionHeading';
import { projects } from '@/lib/constants';
import { Section } from '../layout/Section';
import { ProjectCard } from '../projects/ProjectCard';

const ProjectsSection = () => (
  <Section id="projects">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Featured Projects" />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  </Section>
);

export default ProjectsSection;

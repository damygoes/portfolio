'use client';

import { Project } from '@/lib/types';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

type Props = {
  project: Project;
  index: number;
  onHoverChange?: (hovering: boolean) => void;
};

export const ProjectListItem = ({ project, index, onHoverChange }: Props) => {
  return (
    <a
      href={project.demo ?? project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-8 md:py-10"
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      {/* Inline image for touch / reduced-motion users; desktop pointer users
          get the cursor-following preview instead (CSS-gated, so the layout
          never shifts after hydration). */}
      <div className="relative mb-6 aspect-[3/2] overflow-clip rounded-sm pointer-fine:motion-safe:hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="grid items-baseline gap-2 md:grid-cols-[4rem_1fr_auto] md:gap-8">
        <span className="font-mono text-xs text-primary">
          0{index + 1}.
        </span>

        <div>
          <h3 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-tight transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.description}
          </p>
          <p className="text-meta mt-4 text-muted-foreground">
            {project.tech.join(' · ')}
          </p>
        </div>

        <ArrowUpRight className="hidden size-6 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary md:block" />
      </div>
    </a>
  );
};

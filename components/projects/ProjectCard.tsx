'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Project } from '@/lib/types';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  project: Project;
  index: number;
};

export const ProjectCard = ({ project, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group h-full pt-0 flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
        <div className="relative aspect-square overflow-hidden h-72">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col justify-between flex-grow gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-auto flex gap-2">
            {project.github && (
              <Button asChild size="sm" variant="outline">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> Code
                </Link>
              </Button>
            )}
            {project.demo && (
              <Button asChild size="sm">
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

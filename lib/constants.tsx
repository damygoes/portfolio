import { Contacts, Skills } from './types';

export const sections = [
  'hero',
  'about',
  'experience',
  'projects',
  'skills',
  'contact',
];

export const navLinks = [
  'about',
  'experience',
  'projects',
  'skills',
  'contact',
];

export const aboutMeTexts = ['one', 'two', 'three', 'four'];

export const skills: Skills = [
  {
    title: 'frontend',
    skills: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'backend',
    skills: ['Node.js', 'NestJS', 'Express', 'REST API', 'GraphQL', 'Golang'],
  },
  {
    title: 'database',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Prisma',
      'TypeORM',
      'Drizzle ORM',
    ],
  },
  {
    title: 'devops_tools_architecture',
    skills: [
      'Docker',
      'AWS',
      'Git',
      'CI/CD',
      'Testing',
      'Monorepo',
      'Microservices',
      'Serverless',
    ],
  },
];

export const contacts: Contacts = [
  {
    title: 'Email',
    link: 'mailto:badadamilola@gmx.de',
  },
  {
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/damilolabada',
  },
  {
    title: 'GitHub',
    link: 'https://github.com/damygoes',
  },
];

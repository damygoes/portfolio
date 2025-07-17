import {
  Code,
  Database,
  Github,
  Globe,
  Linkedin,
  Mail,
  Server,
} from 'lucide-react';
import { Contacts, Experiences, Skills } from './types';

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

export const experiences: Experiences = [
  {
    title: 'Team Lead',
    company: 'apomap GmbH',
    location: 'Winterberg, Germany (Hybrid)',
    period: 'Jan. 2025 - Present',
    description:
      'Leading development and team management for a SaaS logistics platform.',
    responsibilities: [
      'Mentor and conduct code reviews for a team of 3 developers',
      'Manage project timelines and ensure quality deliverables',
      'Implement and maintain CI/CD pipelines to streamline deployments',
      'Conducted interviews and onboarding for new developers',
      'Collaborated with product managers to define project requirements',
    ],
  },
  {
    title: 'Fullstack Developer',
    company: 'apomap GmbH',
    location: 'Winterberg, Germany (Hybrid)',
    period: 'Nov. 2022 - Dec. 2024',
    description:
      'Built and maintained scalable frontend and backend features for the logistics SaaS platform.',
    responsibilities: [
      'Designed GraphQL APIs for efficient data retrieval',
      'Developed responsive UIs with React and Tailwind CSS',
      'Optimized performance for a React-based web application',
      'Integrated third-party logistics and POS APIs to enhance pharmacy operations',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'MyCodeCareer',
    location: 'Boston (MA), USA (Remote)',
    period: 'Sep. 2022 - Nov. 2022',
    description:
      'Focused on rebuilding and improving web application interfaces.',
    responsibilities: [
      'Collaborated with UX designers to enhance UI workflows',
      'Rebuilt company website using modern React best practices',
    ],
  },
  {
    title: 'Frontend Developer (Trainee)',
    company: 'Brainnest GmbH',
    location: 'Bremen, Germany (Remote)',
    period: 'Jun. 2022 - Jul. 2022',
    description:
      'Gained hands-on experience developing responsive web applications.',
    responsibilities: [
      'Worked with team members to build UI components',
      'Reviewed code and provided feedback on frontend implementation',
      'Applied web development best practices',
    ],
  },
  {
    title: 'Self-taught Fullstack Developer',
    company: 'Freelance & Personal Projects',
    location: 'Germany',
    period: 'Jun. 2020 - May. 2022',
    description:
      'Built personal and freelance websites while self-teaching fullstack development.',
    responsibilities: [
      'Built and managed websites using WordPress, Elementor, React, and Node.js',
      'Collaborated with small businesses to improve their online presence',
      'Practiced fullstack concepts including authentication, APIs, and deployment',
      'Balanced self-learning with part-time work in logistics and delivery',
    ],
  },
  {
    title: 'Career Transition',
    company: 'Personal',
    location: 'Germany',
    period: 'Jan. 2020 - May. 2020',
    description:
      'Took a short career break during the COVID-19 lockdown to reflect and plan a transition into tech.',
    responsibilities: [
      'Researched the tech industry and self-learning opportunities',
      'Mapped out a long-term goal to transition into software development',
    ],
  },
];

//"demo": "https://expo.dev/@yourusername/reflect-app"

export const skills: Skills = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'frontend',
    skills: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: 'backend',
    skills: ['Node.js', 'NestJS', 'Express', 'REST API', 'GraphQL', 'Golang'],
  },
  {
    icon: <Database className="h-6 w-6" />,
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
    icon: <Globe className="h-6 w-6" />,
    title: 'devops_tools_architecture',
    skills: [
      'Docker',
      'AWS',
      'Git',
      'CI/CD',
      'Testing',
      'Monrepo',
      'Microservices',
      'Serverless',
    ],
  },
];

export const contacts: Contacts = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email',
    link: 'mailto:badadamilola@gmx.de',
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/damilolabada',
  },
  {
    icon: <Github className="h-6 w-6" />,
    title: 'GitHub',
    link: 'https://github.com/damygoes',
  },
];

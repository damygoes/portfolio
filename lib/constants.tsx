import {
  Code,
  Database,
  Github,
  Globe,
  Linkedin,
  Mail,
  Server,
} from 'lucide-react';
import { Contacts, Experiences, Projects, Skills } from './types';

export const sections = [
  'hero',
  'about',
  'experience',
  'projects',
  'skills',
  'contact',
];

export const navLinks = [
  'About',
  'Experience',
  'Projects',
  'Skills',
  'Contact',
];

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

export const projects: Projects = [
  {
    title: 'URL Analyzer – URL Metadata Scraper',
    description:
      'A web app that fetches and displays metadata from any URL, including title, headings, broken links, and more. Built with React and Go.',
    tech: [
      'Golang',
      'Gin (Go Framework)',
      'React',
      'Typescript',
      'Vite',
      'Tailwind CSS',
      'Tanstack Query',
      'Zustand',
      'Docker',
    ],
    image: '/url-analyzer.png',
    github: 'https://github.com/damygoes/url-analyzer',
    // demo: "https://expo.dev/@yourusername/reflect-app",
  },
  {
    title: 'Reflect – Wellness & Journaling App',
    description:
      'A beautifully glassy React Native app for mood tracking, journaling, and mindfulness. Powered by Expo and Supabase.',
    tech: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
    image: '/reflect-app.png',
    github: 'https://github.com/damygoes/reflect',
    // demo: "https://expo.dev/@yourusername/reflect-app",
  },
  {
    title: 'KPI Bot – Stripe Metrics Dashboard',
    description:
      'A SaaS dashboard that connects to Stripe accounts to visualize real-time subscription metrics like MRR, ARR, churn rate, and more.',
    tech: [
      'Next.js',
      'TypeScript',
      'Stripe API',
      'Drizzle ORM',
      'PostgreSQL',
      'Recharts',
      'Shadcn UI',
    ],
    image: '/placeholder.jpg',
    github: 'https://github.com/damygoes/kpi-bot',
    // demo: "https://kpi-bot.example.com",
  },
  {
    title: 'Archetype – Microservices Architecture Case Study',
    description:
      'A scalable Node.js microservices architecture with shared TypeORM models, modular monorepo setup, and independent service deployment. Built with Docker, Express, and Lerna.',
    tech: [
      'TypeScript',
      'Node.js',
      'Express',
      'TypeORM',
      'Lerna',
      'Docker',
      'MySQL',
    ],
    image: '/archetype-project.png',
    github: 'https://github.com/damygoes/archetype',
  },
];

export const skills: Skills = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Frontend',
    skills: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express', 'REST API', 'GraphQL', 'Golang'],
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Database',
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
    title: 'DevOps, Tools & Architecture',
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

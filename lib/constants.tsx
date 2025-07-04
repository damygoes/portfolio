import { Code, Database, Github, Globe, Linkedin, Mail, Server } from 'lucide-react';


export const sections = ["hero", "about", "experience", "projects", "skills", "contact"]

export const navLinks = ["About", "Experience", "Projects", "Skills", "Contact"]

export const experiences = [
  {
    title: "Team Lead",
    company: "apomap GmbH",
    location: "Winterberg, Germany (Hybrid)",
    period: "Jan. 2025 - Present",
    description: "Leading development and team management for a SaaS logistics platform.",
    responsibilities: [
      "Mentor and conduct code reviews for a team of 3 developers",
      "Manage project timelines and ensure quality deliverables",
      "Implement and maintain CI/CD pipelines to streamline deployments",
      "Conducted interviews and onboarding for new developers",
      "Collaborated with product managers to define project requirements",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "apomap GmbH",
    location: "Winterberg, Germany (Hybrid)",
    period: "Nov. 2022 - Dec. 2024",
    description: "Built and maintained scalable frontend and backend features for the logistics SaaS platform.",
    responsibilities: [
      "Designed GRAPHQL APIs for efficient data retrieval",
      "Developed responsive UIs with React and Tailwind CSS",
      "Optimized performance for a React-based web application",
      "Integrated third-party logistics and POS APIs to enhance pharmacy operations",
    ],
  },
  {
    title: "Frontend Developer",
    company: "MyCodeCareer",
    location: "Boston (MA), USA (Remote)",
    period: "Sep. 2022 - Nov. 2022",
    description: "Focused on rebuilding and improving web application interfaces.",
    responsibilities: [
      "Collaborated with UX designers to enhance UI workflows",
      "Rebuilt company website using modern React best practices",
    ],
  },
  {
    title: "Frontend Developer (Trainee)",
    company: "Brainnest GmbH",
    location: "Bremen, Germany (Remote)",
    period: "Jun. 2022 - Jul. 2022",
    description: "Gained hands-on experience developing responsive web applications.",
    responsibilities: [
      "Worked with team members to build UI components",
      "Reviewed code and provided feedback on frontend implementation",
      "Applied web development best practices",
    ],
  },
]

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "/placeholder.jpg",
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce.example.com",
  },
  {
    title: "Task Management App",
    description: "Real-time collaboration tool built with Next.js and GraphQL",
    tech: ["Next.js", "GraphQL", "MongoDB", "Socket.io"],
    image: "/placeholder.jpg",
    github: "https://github.com/yourusername/task-app",
    demo: "https://taskapp.example.com",
  },
  {
    title: "Mobile Fitness Tracker",
    description: "React Native app with health tracking and social features",
    tech: ["React Native", "NestJS", "Redis", "AWS"],
    image: "/placeholder.jpg",
    github: "https://github.com/yourusername/fitness-tracker",
    demo: "https://fitnessapp.example.com",
  },
]

export const skills = [
  {
    icon: <Code className="h-6 w-6" />, title: "Frontend",
    skills: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: <Server className="h-6 w-6" />, title: "Backend",
    skills: ["Node.js", "NestJS", "Express", "REST API", "GraphQL"]
  },
  {
    icon: <Database className="h-6 w-6" />, title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "TypeORM", "Drizzle ORM"]
  },
  {
    icon: <Globe className="h-6 w-6" />, title: "DevOps, Tools & Architecture",
    skills: ["Docker", "AWS", "Git", "CI/CD", "Testing", "Monrepo", "Microservices", "Serverless"]
  }
]

export const contacts = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    link: "mailto:badadamilola@gmx.de",
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    title: "LinkedIn",
    link: "https://linkedin.com/in/damilolabada",
  },
  {
    icon: <Github className="h-6 w-6" />,
    title: "GitHub",
    link: "https://github.com/damygoes",
  },
]

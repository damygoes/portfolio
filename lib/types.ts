import { JSX } from 'react';

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo?: string;
};

export type Skill = {
  icon: JSX.Element;
  title: string;
  skills: string[];
};

export type Contact = {
  icon: JSX.Element;
  title: string;
  link: string;
};

export type Experience = {
  title:  string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
};

export type Projects = Project[];

export type Experiences = Experience[];

export type Skills = Skill[];

export type Contacts = Contact[];
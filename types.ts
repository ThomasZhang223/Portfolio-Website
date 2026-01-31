export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface Experience {
  id: number;
  company: string;
  logo: string;
  title: string;
  period: string;
  description: string[];
}

export interface Hobby {
  id: number;
  title: string;
  description: string;
  images: string[];
}

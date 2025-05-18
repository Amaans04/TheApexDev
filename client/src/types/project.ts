export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  features: string[];
  client: string;
  duration: string;
  url: string;
  github: string;
}

export interface ProjectsData {
  projects: Project[];
} 
export interface SkillItem {
  id: string;
  name: string;
  category: 'core' | 'backend' | 'frontend' | 'tools';
  level: 'Strong' | 'Building' | 'Learning';
  value: number;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  problemSolved: string;
  role: string;
  technologies: string[];
  features: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  status: string;
  highlights: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  specialization: string;
  issuer: string;
  code: string;
  skills: string[];
  credentialUrl?: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  period: string;
  description: string;
  tech: string[];
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

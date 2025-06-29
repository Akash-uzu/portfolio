
export interface Project {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  links: {
    playStore?: string;
    appStore?: string;
    website?: string;
  };
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
    company: string;
    role: string;
    location: string;
    period: string;
    points: string[];
}

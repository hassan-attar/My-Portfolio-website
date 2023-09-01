export type Skill = {
  skillSet: string[];
  icon: string;
  name: string;
  loadIcon: boolean;
};

export type Project = {
  id: number;
  title: string;
  logo: string;
  summary: string;
  technologies: string[];
  github: string;
  url?: string | null;
};

export type Education = {
  courses: string[];
  degrees: {
    title: string;
    where: string;
    from: string;
    to: string;
    duration: number;
    GPA: string;
  }[];
  certificates: {
    title: string;
    url?: string | null;
  }[];
};

export type AboutMe = {
  hobbies: { name: string; icon: string }[];
  about: {
    title: string;
    description: string;
    icon: string;
  }[];
};

export type PortfolioData = {
  skills: Skill[];
  projects: Project[];
  education: Education;
  aboutMe: AboutMe;
};

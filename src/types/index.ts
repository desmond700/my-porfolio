import type { Ref } from "vue";

export interface IProject {
  projectName: string;
  description: string;
  technologies: Array<string>;
  featured: string;
  images: Array<string>;
  github: string;
  created: number;
}

export enum ProjectFilter {
  no_filter = "No Filter",
  sort_by_date = "Sort by Date",
  sort_by_az = "Sort by A-Z",
}

export interface HeaderTitle {
  text: string;
  align: string;
}

export interface Skill {
  name: string;
  knowledge: number;
  imageName: string;
}

export type SkillDataRecord = { [key: string]: Array<Skill> };

export type GlobalColor = {
  primary: string;
  secondary: string;
  navElement: Ref<HTMLElement | undefined>;
}
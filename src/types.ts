import { ReactNode } from "react";

export enum PageKeys {
  Home = "/",
  Experience = "/experience",
  Education = "/education",
  Projects = "/projects",
  Skills = "/skills",
  AbountMe = "/about-me",
}

export interface ContentBlockType {
  main: string | ReactNode;
  after: string | ReactNode;
  sub: string | ReactNode;
  content: string | ReactNode;
}

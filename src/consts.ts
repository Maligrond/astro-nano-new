import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Блог Кабана",
  EMAIL: "stormyweatherlight@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Блог Кабана",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Блог",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Работа",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Проекты",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "blank",
  },
  { 
    NAME: "github",
    HREF: "blank"
  },
  { 
    NAME: "linkedin",
    HREF: "blank",
  }
];

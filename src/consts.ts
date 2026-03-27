import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Ilan Fonseca",
  EMAIL: "ilan-_@hotmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Portfólio de Ilan — Desenvolvedor de Software.",
};

export const BLOG: Metadata = {
  TITLE: "Artigos",
  DESCRIPTION: "Artigos sobre desenvolvimento, tecnologia e aprendizados.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Minha trajetória profissional e experiências.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projetos Pessoais",
  DESCRIPTION:
    "Projetos pessoais e open-source com links para repositórios e demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/ilanzgx",
  },
  {
    NAME: "github",
    HREF: "https://github.com/ilanzgx",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/ilan-fonseca-665025154",
  },
];

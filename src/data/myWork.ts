import type { Technology } from "./typings";
import type { TranslationKey } from "src/i18n/typings";

interface Work {
  name: TranslationKey;
  description: TranslationKey;
  url: string;
  github?: string;
  img: {
    src: string;
    width?: number;
    alt: string;
  };
  technologies: Technology[];
}

const myWorkData: Work[] = [
  {
    name: "mywork.collaborativeTodoName",
    description: "mywork.collaborativeTodoDescription",
    url: "https://collaborative-todo.up.railway.app/",
    github: "https://github.com/gamino97/collaborative-todo",
    img: {
      src: "collaborative-todo-list",
      width: 932,
      alt: "mywork.collaborativeTodoAlt",
    },
    technologies: [
      { name: "Python", icon: "logos:python" },
      {
        name: "Flask",
        icon: "simple-icons:flask",
        className: "nextjs-class",
      },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
    ],
  },
];

export default myWorkData;

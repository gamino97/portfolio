import type { Technology } from "./typings";

interface Experience {
  name: string;
  description?: string;
  technologies: Technology[];
}

const experiences: Experience[] = [
  {
    name: "Ehya Tech",
    description: "8 meses como desarrollador backend",
    technologies: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express", icon: "simple-icons:express" },
      { name: "Hyperledger", icon: "simple-icons:hyperledger" },
      { name: "NoSQL", icon: "gg:loadbar-doc" },
      { name: "HTML", icon: "vscode-icons:file-type-html" },
      { name: "CSS", icon: "vscode-icons:file-type-css" },
      { name: "Javascript", icon: "logos:javascript" },
    ],
  },
  {
    name: "Freelance",
    description: "8 meses como desarrollador fullstack",
    technologies: [
      { name: "Django Rest Framework", icon: "vscode-icons:file-type-django" },
      { name: "SQL", icon: "mdi:sql-query" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "React", icon: "logos:react" },
      {
        name: "Next.js",
        icon: "simple-icons:nextdotjs",
      },
    ],
  },
  {
    name: "COVEICyDET",
    description: "7 meses como desarrollador junior",
    technologies: [
      { name: "Python", icon: "logos:python" },
      { name: "Django", icon: "logos:django-icon" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "HTML", icon: "vscode-icons:file-type-html" },
      { name: "CSS", icon: "vscode-icons:file-type-css" },
      { name: "Javascript", icon: "logos:javascript" },
      { name: "SQL", icon: "mdi:sql-query" },
    ],
  },
];

export default experiences;

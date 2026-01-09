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
    height?: number;
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
      width: 600,
      height: 291,
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
  {
    name: "mywork.ecommerceAdminName",
    description: "mywork.ecommerceAdminDescription",
    url: "https://ecommerce-admin-production-da3c.up.railway.app/",
    github: "https://github.com/gamino97/ecommerce-admin",
    img: {
      src: "ecommerce-admin",
      width: 600,
      height: 291,
      alt: "mywork.ecommerceAdminAlt",
    },
    technologies: [
      {
        name: "Next.js",
        icon: "simple-icons:nextdotjs",
      },
      { name: "Supabase", icon: "logos:supabase-icon" },
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ],
  },
  {
    name: "mywork.ecommerceStorefrontName",
    description: "mywork.ecommerceStorefrontDescription",
    url: "https://ecommerce-portfolio-production.up.railway.app/",
    github: "https://github.com/gamino97/ecommerce-portfolio",
    img: {
      src: "ecommerce-storefront",
      width: 1512,
      height: 585,
      alt: "mywork.ecommerceStorefrontAlt",
    },
    technologies: [
      {
        name: "Next.js",
        icon: "simple-icons:nextdotjs",
      },
      { name: "Python", icon: "logos:python" },
      { name: "FastAPI", icon: "logos:fastapi-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ],
  }
];

export default myWorkData;

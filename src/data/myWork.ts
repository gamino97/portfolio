interface Work {
  name: string;
  description: string;
  url: string;
  github?: string;
  img: {
    src: string;
    width?: number;
    alt: string;
  };
}

const myWorkData: Work[] = [
  {
    name: "Collaborative To-Do List",
    description: "Manage your tasks.",
    url: "https://collaborative-todo.up.railway.app/",
    github: "https://github.com/gamino97/collaborative-todo",
    img: {
      src: "collaborative-todo-list",
      width: 932,
      alt: "Collaborative To-Do Image",
    },
  },
];

export default myWorkData;

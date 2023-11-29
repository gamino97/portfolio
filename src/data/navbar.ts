interface NavLink {
  name: string;
  url: string;
  style: string;
}
const navLinks: NavLink[] = [
  {
    name: "Sobre mí",
    url: "#about",
    style: "transparent",
  },
  {
    name: "Experiencia",
    url: "#experience",
    style: "transparent",
  },
  {
    name: "Proyectos",
    url: "#my-work",
    style: "transparent",
  },
  {
    name: "Contáctame",
    url: "#contact-me",
    style: "primary",
  },
];

export default navLinks;


import type { defaultLang, ui } from "src/i18n/ui";

interface NavLink {
  name: keyof typeof ui[typeof defaultLang];
  url: string;
  style: string;
}
const navLinks: NavLink[] = [
  {
    name: "nav.linkAbout",
    url: "#about",
    style: "transparent",
  },
  {
    name: "nav.linkExperience",
    url: "#experience",
    style: "transparent",
  },
  {
    name: "nav.linkWork",
    url: "#my-work",
    style: "transparent",
  },
  {
    name: "nav.linkContact",
    url: "#contact-me",
    style: "primary",
  },
];

export default navLinks;

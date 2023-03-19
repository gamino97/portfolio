import { Language } from "src/components/typings";

interface NavLink {
  name: string;
  url: string;
  style: string;
}
const navLinks: NavLink[] = [
  /* {
    name: "navlinkMain",
    url: "#",
    style: "transparent",
  }, */
  {
    name: "navlinkAbout",
    url: "#about",
    style: "transparent",
  },
  {
    name: "navlinkExperience",
    url: "#experience",
    style: "transparent",
  },
  {
    name: "navlinkWork",
    url: "#my-work",
    style: "transparent",
  },
  {
    name: "navlinkContact",
    url: "#contact-me",
    style: "primary",
  },
];

export default navLinks;

import { Language } from "src/components/typings";

interface Translation {
  [key: string]: {
    [Language.English]: string;
    [Language.Spanish]: string;
  };
}
const translations: Translation = {
  buttonArial: {
    [Language.English]: "Open mobile nav",
    [Language.Spanish]: "Abrir navegación movil",
  },
  navlinkMain: {
    [Language.English]: "Main",
    [Language.Spanish]: "Inicio",
  },
  navlinkAbout: {
    [Language.English]: "About",
    [Language.Spanish]: "Sobre mí",
  },
  navlinkExperience: {
    [Language.English]: "Experience",
    [Language.Spanish]: "Experiencia",
  },
  navlinkWork: {
    [Language.English]: "Work",
    [Language.Spanish]: "Proyectos",
  },
  navlinkContact: {
    [Language.English]: "Contact Me",
    [Language.Spanish]: "Contáctame",
  },
};

export default translations;

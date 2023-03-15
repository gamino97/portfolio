import { Language } from "src/components/typings";

export interface Translation {
  [key: string]: {
    [Language.English]: string;
    [Language.Spanish]: string;
  };
}

import { defaultLang, ui } from "src/i18n/ui";

export type TranslationKey = keyof typeof ui[typeof defaultLang];


import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.carlos-gamino.dev",
  integrations: [sitemap(), icon()],
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true
    }
  }
});

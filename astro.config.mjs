// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// import adapter from "@astro/adapter-static";
// https://astro.build/config

export default defineConfig({
  // site: "https://marc-philippe-dev.github.io",
  // base: "/UxDevFusionWithAstro/",
  integrations: [
    icon(),
    tailwind({
      applyBaseStyles: false,
    }),

    react(),
  ],

  vite: {
    plugins: [],
  },
});

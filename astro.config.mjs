// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check

/** @type {import('astro').AstroUserConfig} */
export default {
  renderers: ['@astrojs/renderer-preact'],
  vite: {
    plugins: [],
  },
  buildOptions: {
    site: "https://steelwood-agency.netlify.app/",
    sitemap: true
  },
};

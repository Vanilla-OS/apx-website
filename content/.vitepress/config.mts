import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Apx - Vanilla OS",
  description: "The docs for Apx",
  lang: "en",

  themeConfig: {
    nav: {
      version: "v2.4.3",
      links: {
        first: [
          {
            text: "Getting Started",
            url: "https://docs.vanillaos.org/apx/en/getting-started",
          },
          {
            text: "Documentation",
            url: "https://docs.vanillaos.org/collections/apx",
          },
          { text: "Support", url: "https://github.com/Vanilla-OS/apx" },
          { text: "Community Assets", url: "/community" },
        ],
        second: [
          {
            text: "Subsystems",
            url: "https://docs.vanillaos.org/apx/en/working-w-subsystems",
          },
          {
            text: "Stacks",
            url: "https://docs.vanillaos.org/apx/en/working-w-stacks",
          },
          {
            text: "Package Managers",
            url: "https://docs.vanillaos.org/apx/en/understanding-pmss",
          },
        ],
      },
    },
  },

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "author", content: "Vanilla OS Contributors" }],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Apx, Vanilla OS, Vanilla, OS, VanillaOS, Apx Vanilla OS, Apx VanillaOS",
      },
    ],
    ["meta", { name: "og:title", content: "Apx - Vanilla OS" }],
    ["meta", { name: "og:description", content: "The docs for Apx" }],
    ["meta", { name: "og:image", content: "/assets/card.png" }],
    ["meta", { name: "og:url", content: "https://apx.vanillaos.org" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:site_name", content: "Apx - Vanilla OS" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "Apx - Vanilla OS" }],
    ["meta", { name: "twitter:description", content: "The docs for Apx" }],
    ["meta", { name: "twitter:image", content: "/assets/card.png" }],
    ["meta", { name: "twitter:url", content: "https://Apx.vanillaos.org" }],
    ["meta", { name: "twitter:site", content: "https://vanillaos.org/" }],
    ["meta", { name: "twitter:creator", content: "@VanillaOSLinux" }],
  ],
});

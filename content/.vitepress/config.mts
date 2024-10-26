import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Apx",
  description: "A versatile command-line interface (CLI) tool designed to simplify the management of operating system containers.",
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
    ["link", { rel: "icon", href: "/favicon.svg" }],
    ["meta", { name: "author", content: "Vanilla OS Contributors" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
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
    ["meta", { name: "og:title", content: "Apx" }],
    ["meta", { name: "og:description", content: "A versatile command-line interface (CLI) tool designed to simplify the management of operating system containers." }],
    ["meta", { name: "og:image", content: "/assets/cover.png" }],
    ["meta", { name: "og:url", content: "https://apx.vanillaos.org" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:site_name", content: "Apx" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "Apx" }],
    ["meta", { name: "twitter:description", content: "A versatile command-line interface (CLI) tool designed to simplify the management of operating system containers." }],
    ["meta", { name: "twitter:image", content: "/assets/cover.png" }],
    ["meta", { name: "twitter:url", content: "https://apx.vanillaos.org" }],
    ["meta", { name: "twitter:site", content: "https://vanillaos.org/" }],
    ["meta", { name: "twitter:creator", content: "@VanillaOSLinux" }],
  ],
});

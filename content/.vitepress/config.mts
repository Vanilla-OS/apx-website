import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Apx - Vanilla OS",
  description: "The docs for Apx",
  lang: "en",

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'Vanilla OS Contributors' }],
    ['meta', { name: 'keywords', content: 'Apx, Vanilla OS, Vanilla, OS, VanillaOS, Apx Vanilla OS, Apx VanillaOS' }],
    ['meta', { name: 'og:title', content: 'Apx - Vanilla OS' }],
    ['meta', { name: 'og:description', content: 'The docs for Apx' }],
    ['meta', { name: 'og:image', content: '/assets/card.png' }],
    ['meta', { name: 'og:url', content: 'https://apx.vanillaos.org' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'Apx - Vanilla OS' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Apx - Vanilla OS' }],
    ['meta', { name: 'twitter:description', content: 'The docs for Apx' }],
    ['meta', { name: 'twitter:image', content: '/assets/card.png' }],
    ['meta', { name: 'twitter:url', content: 'https://Apx.vanillaos.org' }],
    ['meta', { name: 'twitter:site', content: 'https://vanillaos.org/' }],
    ['meta', { name: 'twitter:creator', content: '@VanillaOSLinux' }],
  ],
})

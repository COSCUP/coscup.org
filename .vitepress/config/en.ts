import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en' },
      { text: 'Event', link: '/en/event' },
      { text: 'About', link: '/en/about' },
    ],
    sidebar: {},
    socialLinks: [
      { icon: 'github', link: 'https://github.com/COSCUP' },
    ],
  },
})

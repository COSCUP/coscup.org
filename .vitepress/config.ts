import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'COSCUP 2024',
  description: 'A VitePress Site',
  srcDir: 'content',
  base: '/2024',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Event', link: '/event' },
      { text: 'Participate', link: '/participate' },
      { text: 'About', link: '/about' },
    ],

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/COSCUP' },
    ],
  },
})

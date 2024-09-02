import { defineConfig } from 'vitepress'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// Subpath imports (e.g. '#data') for TypeScript files are not supported
// See https://github.com/vuejs/vitepress/issues/4173
import { conference } from '../data/conference'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      Components({
        // Auto import components and icons in Vue and Markdown files
        dirs: ['../components'],
        include: [/\.vue($|\?)/, /\.md($|\?)/],
        resolvers: [
          IconsResolver({ prefix: 'icon' }),
        ],
      }),
      Icons({ compiler: 'vue3' }),
    ],
  },
  title: `COSCUP ${conference.year}`,
  description: 'A VitePress Site',
  srcDir: 'content',
  base: `/${conference.year}`,
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

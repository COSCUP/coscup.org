import { defineConfig } from 'vitepress'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

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
          IconsResolver({
            prefix: 'icon',
            customCollections: ['local'],
          }),
        ],
      }),
      Icons({
        compiler: 'vue3',
        customCollections: {
          local: FileSystemIconLoader('assets/icons'),
        },
      }),
    ],
  },
  title: conference.title,
  description: conference.description,
  srcDir: 'content',
  base: '/coscup.org',
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

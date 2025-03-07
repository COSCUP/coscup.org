import { defineConfig } from 'vitepress'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// Subpath imports (e.g. '#data') for TypeScript files are not supported
// See https://github.com/vuejs/vitepress/issues/4173

import { conference } from '../../data/conference'
import { en } from './en'
import { zh_tw } from './zh_tw'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      Components({
        // Auto import components and icons in Vue and Markdown files
        dirs: ['../components', '.'],
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
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('swiper'),
      },
    },
  },
  title: conference.title,
  description: conference.description,
  srcDir: 'content',
  base: '/coscup.org',
  cleanUrls: true,
  rewrites: {
    'zh_tw/:rest*': ':rest*',
  },
  locales: {
    root: { label: '繁體中文', ...zh_tw },
    en: { label: 'English', ...en },
  },
})

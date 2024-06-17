import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "COSCUP",
  description: "COSCUP official website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '活動資訊', 
        items:[
          { text: '活動時間', link: '/information/time' },
          { text: '活動地點/交通地圖', link: '/information/traffic' },
          { text: '會場地圖', link: '/information/conf-map' },
          { text: '議程', link: '/information/session' },
          { text: '活動', link: '/information/event' },
          { text: '會場狀態', link: '/information/room' }
        ]  
      },
      { text: '參與指南', link: '/participation-guide/' },
      { text: '認識我們', link: '/about-us/' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

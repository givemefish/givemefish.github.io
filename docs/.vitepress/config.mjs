import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import timeline from "vitepress-markdown-timeline";
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "JC Note",
  description: "個人日常隨筆、工作筆記和學習記錄",
  cleanUrls: true,
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(timeline);
    },
  },
  themeConfig: {        
    lastUpdated: true,        
    docFooter: {
      prev: false,
      next: false
    },
    nav: [
      { text: '首頁', link: '/' },
      { text: '書法', link: '/calligraphy' },
      { text: '程式', link: '/programming' }
    ],        
    socialLinks: [
      { icon: 'github', link: 'https://github.com/givemefish/' }
    ],   
    footer: {      
      copyright: 'Copyright © 2024-present Chia-Chun Chen'
    },    
  },
  vite: {
    plugins: [
      AutoSidebar({
        ignoreIndexItem: true
      })
    ]
  }
})

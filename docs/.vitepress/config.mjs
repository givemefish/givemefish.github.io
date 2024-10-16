import timeline from "vitepress-markdown-timeline";
import { generateSidebar } from 'vitepress-sidebar'; 
import { defineConfig } from 'vitepress'

// https://vitepress-sidebar.cdget.com/zhHans/introduction
const vitepressSidebarOptions = [{
  documentRootPath: 'docs',
  collapsed: true,  
  scanStartPath: 'calligraphy',  
  resolvePath: '/calligraphy/',     
  useTitleFromFileHeading: true,
  hyphenToSpace: true,
  convertSameNameSubFileToGroupIndexPage: true,  
}, {
  documentRootPath: 'docs',
  scanStartPath: 'programming',  
  resolvePath: '/programming/',  
  useTitleFromFileHeading: true,
  hyphenToSpace: true,
  convertSameNameSubFileToGroupIndexPage: true
}];


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
    nav: [
      { text: '首頁', link: '/' },
      { text: '書法', link: '/calligraphy' },
      { text: '程式', link: '/programming' },
      { text: '健身', link: '/fitness' }
    ],        
    sidebar: generateSidebar(vitepressSidebarOptions),
    outline: {
      level: 'deep',
      label: '頁面導覽'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/givemefish/' }
    ],   
    docFooter: {
      prev: '前一頁',
      next: '下一頁'
    },
    footer: {      
      copyright: 'Copyright © 2024-present Chia-Chun Chen'
    },    
    returnToTopLabel: '返回頁首',
    search: {
      provider: 'local'
    }
  }
})

import timeline from "vitepress-markdown-timeline";
import { generateSidebar } from 'vitepress-sidebar'; 
import { defineConfig } from 'vitepress'

// https://vitepress-sidebar.cdget.com/zhHans/introduction
const vitepressSidebarOptions = [{
  documentRootPath: 'docs',  
  scanStartPath: 'calligraphy',  
  resolvePath: '/calligraphy/',  
  convertSameNameSubFileToGroupIndexPage: true,   
  useTitleFromFrontmatter: true,    
}, {
  documentRootPath: 'docs',
  scanStartPath: 'programming',  
  resolvePath: '/programming/',    
  convertSameNameSubFileToGroupIndexPage: true,
  useTitleFromFrontmatter: true  
}];


export default defineConfig({
  title: "JC Note",
  description: "個人日常隨筆、工作筆記和學習記錄",
  cleanUrls: true,      
  markdown: {
    lineNumbers: true,
    lazyLoading: true,
    config: (md) => {
      md.use(timeline);
    },
  },
  themeConfig: {            
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
  },
  vite: { 
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
        'vitepress', 
        '@nolebase/ui', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        '@nolebase/vitepress-plugin-highlight-targeted-heading', 
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
        '@nolebase/ui', 
      ], 
    }, 
  }
})

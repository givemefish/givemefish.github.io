import { generateSidebar } from "vitepress-sidebar";
import taskLists from "markdown-it-task-checkbox";

// https://vitepress-sidebar.cdget.com/zhHans/introduction
const vitepressSidebarOptions = [
  {
    documentRootPath: "docs",
    scanStartPath: "calligraphy",
    resolvePath: "/calligraphy/",
    includeFolderIndexFile: true,
    useTitleFromFrontmatter: true,
    collapsed: true,
    collapseDepth: 2,
  },
  {
    documentRootPath: "docs",
    scanStartPath: "reading",
    resolvePath: "/reading/",
    useTitleFromFrontmatter: true,
  },
  {
    documentRootPath: "docs",
    scanStartPath: "programming",
    resolvePath: "/programming/",
    useTitleFromFrontmatter: true,
  },
];

const themeConfig = {
  base: "/",
  lang: "zh-TW",
  logo: "/logo.jpg",
  favicon: "/favicon.ico",
  title: "JC Note",
  description: "個人日常隨筆、工作筆記和學習記錄",
  lastUpdated: false,
  cleanUrls: true,
  outlineLevel: 2,
  outlineLabel: "目錄導覽",
  editLinkPattern:
    "https://github.com/givemefish/givemefish.github.io/edit/main/docs/:path",
  editLinkText: "更新文章",
  mdMath: true, // 數學公式
  mdLineNums: true, // 程式行號
  mdLazyLoading: true, // 圖片延遲載入
  nav: [
    { text: "首頁", link: "/" },
    {
      text: "分類",
      items: [
        { text: "書法", link: "/calligraphy/" },
        { text: "閱讀", link: "/reading/" },
        { text: "程式", link: "/programming/" },
        { text: "健身", link: "/fitness/" },
      ],
    },
    { text: "標籤", link: "/tags" },
  ],
  sidebar: generateSidebar(vitepressSidebarOptions),
  outline: {
    level: "deep",
    label: "頁面導覽",
  },
  socialLinks: [{ icon: "github", link: "https://github.com/givemefish/" }],
  docFooter: {
    prev: "前一頁",
    next: "下一頁",
  },
  footer: {
    copyright: "Copyright © 2024-present Chia-Chun Chen",
  },
};

export default themeConfig;

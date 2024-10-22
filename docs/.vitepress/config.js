import { defineConfig } from "vitepress";
import themeConfig from "./theme/config.js";
import mdTaskCheckbox from "markdown-it-task-checkbox";
import mdFootnote from "markdown-it-footnote";

const root = themeConfig.base ? themeConfig.base.slice(0, -1) : "";

export default defineConfig({
  head: [["link", { rel: "icon", href: root + themeConfig.favicon }]],
  base: themeConfig.base,
  lang: themeConfig.lang,
  title: themeConfig.title,
  description: themeConfig.description,
  lastUpdated: themeConfig.lastUpdated,
  cleanUrls: themeConfig.cleanUrls,
  themeConfig: {
    logo: themeConfig.logo,
    nav: themeConfig.nav,
    sidebar: themeConfig.sidebar,
    socialLinks: themeConfig.socialLinks,
    outline: {
      level: themeConfig.outlineLevel,
      label: themeConfig.outlineLabel,
    },
    editLink: {
      pattern: themeConfig.editLinkPattern,
      text: themeConfig.editLinkText,
    },
    docFooter: themeConfig.docFooter,
    footer: themeConfig.footer,
    search: {
      provider: "local",
    },
  },
  markdown: {
    math: themeConfig.mdMath,
    lineNumbers: themeConfig.mdLineNums,
    lazyLoading: themeConfig.mdLazyLoading,
    config: (md) => {
      md.use(mdFootnote);
      md.use(mdTaskCheckbox);
    },
  },
});

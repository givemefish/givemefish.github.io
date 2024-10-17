// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { NolebaseHighlightTargetedHeading } from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import { NolebaseEnhancedReadabilitiesMenu,  NolebaseEnhancedReadabilitiesScreenMenu } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import './style.css'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css' 
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {            
      // 為寬螢幕的導航欄添加閱讀增強選單
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      // 為窄螢幕的導航欄添加閱讀增強選單
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 
      // 為當前標題提供高亮
      'layout-top': () => h(NolebaseHighlightTargetedHeading), 
    })
  },  
  enhanceApp({ app, router, siteData }) {        
  }
}

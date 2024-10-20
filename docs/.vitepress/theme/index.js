// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import Tags from "./components/Tags.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp({ app, router, siteData }) {
    app.component("Tags", Tags);
  },
};

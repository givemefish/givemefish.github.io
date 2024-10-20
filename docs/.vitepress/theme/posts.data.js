import { createContentLoader } from "vitepress";

export default createContentLoader("/**/*.md", {
  transform(raw) {
    var result = raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter?.title,
        url,
        tags: frontmatter?.tags,
      }))
      .filter(({ title }) => title != null && typeof title != undefined)
      .sort((a, b) => {
        return a.title.localeCompare(b.title, "zh-Hant");
      });

    return result;
  },
});

const data = [];
export { data };

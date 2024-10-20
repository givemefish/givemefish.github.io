import { createContentLoader } from "vitepress";

export default createContentLoader("/**/*.md", {
  transform(raw) {
    var result = raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter?.title,
        url,
        tags: frontmatter?.tags,
      }))
      .filter(({ title }) => title != null)
      .sort((a, b) => {
        var titleA = a.title.toUpperCase();
        var titleB = b.title.toUpperCase();
        if (titleA < titleB) return -1;
        else if (titleA > titleB) return 1;
        else return 0;
      });
    return result;
  },
});

const data = [];
export { data };

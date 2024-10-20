export function initTags(posts) {
  const data = {};
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const tags = post.tags;
    if (Array.isArray(tags)) {
      tags.forEach((tag) => {
        if (!data[tag]) {
          data[tag] = [];
        }
        data[tag].push(post);
      });
    }
  }

  var orderedData = Object.keys(data)
    .sort((a, b) => a.localeCompare(b, "zh-Hant"))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});

  return orderedData;
}

import marked from "marked";
import { readFile, readdir, writeFile } from "fs/promises";
import frontmatter from "front-matter";
import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);

readdir(__dirname)
  .then((files) => {
    return Promise.all(
      files
        .filter((x) => x.includes(".md"))
        .map((name) =>
          readFile(path.resolve(__dirname, name), "utf8").then((content) => {
            return { content, name };
          })
        )
    );
  })
  .then((contents) => {
    const mds = contents.reduce((acc, y) => {
      const data = frontmatter(y.content);
      const body = marked(data.body);
      acc.push({
        slug: y.name.replace(".md", ""),
        ...data.attributes,
        body,
      });
      return acc;
    }, []);

    writeFile(
      path.resolve(__dirname, `_posts.json`),
      JSON.stringify(mds)
    ).then(() => console.log("Posts JSON written"));
  });

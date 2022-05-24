import fs from "fs";
import jsyaml from "js-yaml";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";

import type { Raw } from "mdast-util-to-hast";
import type { Content, Element, Text } from "mdast-util-to-hast/lib";


type Frontmatter = {
  author: string;
  date: string;
  title: string;
  description?: string;
};

export type BlogPost = Frontmatter & {
  preview: string;
  markdown: string;
  next: string | null;
  prev: string | null;
};

/**
 * Generates a promise containing the parsed blogs`.
 * @throws if the folder name contains anything but 'A-Z', 'a-z', '0-9', or '-'
 * @throws if the folder does not contain a file named 'index.md'
 * @throws if any files cannot be parsed
 * @returns a `Promise` with derived blog information 
 */
const getBlogPostsOnce = async () => {
  // Build (and deconstruct) and object that collects errors and results
  const { noFile, badNames, parseFail, posts } = fs
    .readdirSync(`content/blog`, { withFileTypes: true })
    .reduce((result, node) => {
        let indexPath = `content/blog/${node.name}/index.md`;
        // skip files at the root of content/blog
        if (!node.isDirectory()) return result;
        // collect directories that don't have an index.md file
        if (!fs.existsSync(indexPath)) result.noFile.push(node.name);
        // collect directories with invalid names
        if (/[^A-Za-z0-9\-]/g.test(node.name)) result.badNames.push(node.name);

        // attempt to parse the file and collect parsing errors
        try {
          result.posts.push({ slug: node.name, ...parseBlog(indexPath) });
        } catch (err) {
          result.parseFail.push(
            `${node.name} :: ${JSON.stringify(err) || "Unknown Error"}`
          );
        }

        return result;
      }, {
        noFile: [] as string[],
        badNames: [] as string[],
        parseFail: [] as string[],
        posts: [] as Array<Omit<BlogPost, "next" | "prev"> & { slug: string }>,
      }
    );

  // build (and throw) the error string if errors occured
  let errors = "";
  if (badNames.length)
    errors += `The following directories have invalid names: \n${badNames.join(
      ". "
    )}\n`;

  if (noFile.length)
    errors += `The following directories have no 'Index.md': \n${noFile.join(
      ", "
    )}\n`;

  if (parseFail.length)
    errors += `The following parsing errors were encountered: \n${parseFail.join(
      "\n"
    )}\n`;

  if (errors)
    throw new Error(
      errors +
        `\nBlog directory names may only contain english letters [A-Za-z], numbers [0-9], and em-dash [-].
        All blog directories must also contain an index.md file with valid markdown content.\n`
    );

  return posts
    // sort by date
    .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
    // build a map, adding 'prev' and 'next' properties
    .reduce((map, post, index, sorted) => {
      const { slug, ...rest } = post;
      return map.set(slug, {
        prev: sorted[index - 1]?.slug ?? null,
        next: sorted[index + 1]?.slug ?? null,
        ...rest,
      });
    }, new Map<string, BlogPost>());
};

/** 
 * Parses a markdown file with frontmatter into the following
 *  - `title`: the title for the blog as provided in the frontmatter section
 *  - `author`: the blog author's name as provided in the frontmatter section
 *  - `date`: a formatted date string derived from the frontmatter section
 *  - `next`: the slug for the next blog post (by date) or null, if none
 *  - `prev`: the slug for the previous blog post (by date) or null, if none
 *  - `preview`: a preview, either provided in frontmatter or generated from the first text paragraph on the page
 *  - `markdown`: the markdown (without frontmatter) as a string to be processed in the Page component
 * @param filepath the filepath to the blog's markdown file
 * @throws if the frontmatter supplied has missing or invalid required fields
 * @throws if a file contains invalid frontmatter
 * @returns an object with metadata properties and the modified markdown for later parsing
 */
const parseBlog = (filepath: string): Omit<BlogPost, "next" | "prev"> => {
  // Read the markdown file
  const fileContents = fs.readFileSync(filepath, { encoding: "utf8" });
  // parse the file contents with support for frontmatter and Github Glavored Markdown
  let parsed = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkFrontmatter)
    .parse(fileContents);

  // Extract frontmatter yaml
  const [yamlNode, ...childrenWithoutYaml] = parsed.children;
  const { value: yaml } = yamlNode as Content as Raw;

  // Parse frontmatter yaml to object
  const frontmatter = jsyaml.load(yaml, { json: true }) as Frontmatter;

  // Validate frontmatter
  if (
    !frontmatter ||
    "string" !== typeof frontmatter.author ||
    "string" !== typeof frontmatter.date ||
    "string" !== typeof frontmatter.title
  ) {
    throw new Error(
      `Frontmatter for the blog in /blog/${filepath} has missing or invalid fields.`
    );
  }

  // Select a suitable paragraph element from which to generate a preview
  const previewParagraph = childrenWithoutYaml.find(
    (node) =>
      node.type === "paragraph" &&
      node.children.some((child) => child.type === "text" && child.value)
  ) as Element | undefined;

  // Extract the first text element from the selected paragraph, or use a default if none
  const rawPreview =
    (
      previewParagraph?.children.find(
        (child) => child.type === "text" && child.value
      ) as Text | undefined
    )?.value
      .split("\n")
      .join(" ") ?? "Preview not available";

  // Truncate preview texts to 160 characters
  const preview =
    rawPreview.length > 160
      ? rawPreview.substring(0, 160).concat(" ...")
      : rawPreview;

  // Compile and serialize the parsed markdown so it can be passed in the page props
  const markdown = unified()
    .use(remarkGfm)
    .use(remarkStringify)
    // Overwrite the node's `children` property to exclude the yaml node
    .stringify({ ...parsed, children: childrenWithoutYaml });

  return {
    author: frontmatter.author,
    date: Intl.DateTimeFormat("en-US-u-hc-h12", {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(Date.parse(frontmatter.date)),
    preview: frontmatter.description ?? preview,
    markdown: markdown,
    title: frontmatter.title,
  };
};

/** A promise which resolves to the partially processed blog posts */
const blogPostsSingleton = getBlogPostsOnce();

export default blogPostsSingleton;
import fs from 'fs';
import jsyaml from 'js-yaml';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';

import type {Raw} from 'mdast-util-to-hast';
import type {Content, Element, Text} from 'mdast-util-to-hast/lib';

/**
 * An object representing the YAML data at the top of a Markdown File,
 * converted to a JavaScript object for rendering.
 *
 * @property {string} author - The publishing name chosen by the Author
 * @property {string} date - The publish date of the post as specificed by the Author
 * @property {string} title - The Author's chosen title for the post
 * @property {string} description - A short description chosen by the Author for SEO purposes
 */
type Frontmatter = {
  author: string;
  date: string;
  title: string;
  description?: string;
};
/**
 * An object representing the parsed contents of a blog's markdown source,
 * along with additional metadata for that blog.
 *
 * @property {string} title - The display title for the blog
 * @property {string} date - The publish date from the Frontmatter, formatted to be human readable
 * @property {string} author - The name of the accredited author for this post
 * @property {string} preview - Either the author's description, or if none, the first text
 * paragraph of the parsed Markdown content - without line breaks and truncated to 160 characters.
 * @property {string} markdown - The raw markdown with the frontmatter removed.
 * @property {(string | null)} next - The slug for the next post (by date). Null for the latest post.
 * @property {(string | null)} prev - The slug for the previous post (by date). Null for the earliest post.
 */
export type BlogPost = Frontmatter & {
  preview: string;
  markdown: string;
  next: string | null;
  prev: string | null;
};

/**
 * For each blog directory, asynchronously validates the directory name, generates a slug from it,
 * and maps the slug to an Instance of `Blogpost` derived from the contents of the `index.md`
 * in that directory.
 *
 * @throws if the folder name contains anything but 'A-Z', 'a-z', '0-9', or '-'
 * @throws if the folder does not contain a file named 'index.md'
 * @throws if any files cannot be parsed
 * @returns {Promise} A `Promise` resolving to a `Map` of slugs to `Blogpost` objects
 */
const getBlogPostsOnce = async () => {
  /** An object of arrays for sorting errors and parsing results */
  const collector = {
    noFile: [] as string[],
    badNames: [] as string[],
    parseFail: [] as string[],
    posts: [] as Array<{slug: string} & Omit<BlogPost, 'next' | 'prev'>>,
  };

  const {noFile, badNames, parseFail, posts} = fs
    //Read the contents of the blog directory
    .readdirSync(`src/pages/blog`, {withFileTypes: true})
    /* Starting with an object where each property is an empty array, parse each blog.
    If successful, append the result to the `posts` array. Otherwise,
    append the directory name to an appropriate array for each expected error that occurs */
    .reduce((result, node) => {
      let indexPath = `src/pages/blog/${node.name}/index.md`;
      // skip files at the root of content/blog
      if (!node.isDirectory()) return result;
      // append the names of directories that don't have an index.md file to our "no file" array
      if (!fs.existsSync(indexPath)) result.noFile.push(node.name);
      // append the names of directories with invalid names to our "bad name" array
      if (/[^A-Za-z0-9\-]/g.test(node.name)) result.badNames.push(node.name);
      /* attempt to parse the file and push the result
        (along with our valid directory name as `slug`) to our "posts" array*/
      try {
        result.posts.push({slug: node.name, ...parseBlog(indexPath)});
        /* On failure, append the name of the directory to our
        "Parsing Failure" array with a descriptive message */
      } catch (err) {
        result.parseFail.push(
          `${node.name} :: ${JSON.stringify(err || 'Unknown Error')}`
        );
      }
      return result;
    }, collector);

  // For each type of expected error, report which blogs generated that error.
  let errors = '';
  if (badNames.length)
    errors += `The following directories have invalid names: \n${badNames.join(
      '. '
    )}\n`;

  if (noFile.length)
    errors += `The following directories have no 'Index.md': \n${noFile.join(
      ', '
    )}\n`;

  if (parseFail.length)
    errors += `The following parsing errors were encountered: \n${parseFail.join(
      '\n'
    )}\n`;

  if (errors)
    throw new Error(
      errors +
        `\nBlog directory names may only contain english letters [A-Za-z], numbers [0-9], and em-dash [-].
        All blog directories must also contain an index.md file with valid markdown content.\n`
    );

  return (
    posts
      // sort by date from earliest to latest
      .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
      // build the `Map` of slugs to blogs, adding 'prev' and 'next' properties to each BlogPost
      .reduce((map, post, index, sorted) => {
        const {slug, ...rest} = post;
        return map.set(slug, {
          prev: sorted[index - 1]?.slug ?? null,
          next: sorted[index + 1]?.slug ?? null,
          ...rest,
        });
      }, new Map<string, BlogPost>())
  );
};

/**
 * Parses a markdown file into an instance of `BlogPost`
 * @param {string} filepath the filepath to the blog's markdown file
 * @throws if the frontmatter supplied has missing or invalid required fields
 * @throws if a file contains invalid frontmatter
 * @returns an object with metadata properties and the modified markdown for later parsing
 */
const parseBlog = (filepath: string): Omit<BlogPost, 'next' | 'prev'> => {
  console.log(`Parsing ${filepath}`);
  // Read the markdown file as a string
  const fileContents = fs.readFileSync(filepath, {encoding: 'utf8'});
  // parse the file contents using plugins to support frontmatter and Github Glavored Markdown
  let parsed = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkFrontmatter)
    .parse(fileContents);

  // Extract frontmatter yaml
  const [yamlNode, ...childrenWithoutYaml] = parsed.children;
  const {value: yaml} = yamlNode as Content as Raw;

  // Parse frontmatter yaml to object
  const frontmatter = jsyaml.load(yaml, {json: true}) as Frontmatter;

  // Validate frontmatter
  if (
    !frontmatter ||
    'string' !== typeof frontmatter.author ||
    'string' !== typeof frontmatter.date ||
    'string' !== typeof frontmatter.title
  ) {
    throw new Error(
      `Frontmatter for the blog at '${filepath}' has missing or invalid fields.`
    );
  }

  // Select a suitable paragraph element from which to generate a preview
  const previewParagraph = childrenWithoutYaml.find(
    node =>
      node.type === 'paragraph' &&
      node.children.some(child => child.type === 'text' && child.value)
  ) as Element | undefined;

  // Extract the first text element from the selected paragraph, or use a default if none
  const rawPreview =
    (
      previewParagraph?.children.find(
        child => child.type === 'text' && child.value
      ) as Text | undefined
    )?.value
      .split('\n?')
      .join(' ') ?? 'Preview not available';

  // Truncate preview texts to 160 characters
  const preview =
    rawPreview.length > 160
      ? rawPreview.substring(0, 160).concat(' ...')
      : rawPreview;

  // Compile and serialize the parsed markdown so it can be passed in the page props
  const markdown = unified()
    .use(remarkGfm)
    .use(remarkStringify)
    // Overwrite the node's `children` property to exclude the yaml node
    .stringify({...parsed, children: childrenWithoutYaml});

  return {
    author: frontmatter.author,
    date: Intl.DateTimeFormat('en-US-u-hc-h12', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }).format(Date.parse(frontmatter.date)),
    preview: frontmatter.description ?? preview,
    markdown: markdown,
    title: frontmatter.title,
  };
};

/** Promise that resolves to a map of slugs to pre-processed blog posts */
const blogPostsSingleton = getBlogPostsOnce();
export default blogPostsSingleton;

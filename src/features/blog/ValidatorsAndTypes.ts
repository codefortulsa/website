import { Assertion } from 'remark-validate-vfile';
import { z } from 'zod';

export type FrontmatterInput = z.input<typeof FrontmatterSchema>;
export type FrontmatterOutput = z.output<typeof FrontmatterSchema>
export type BlogPost = z.infer<typeof BlogPostSchema>;

export const FrontmatterSchema = z.object({
  /** The name (or chosen pseudonym) of the author */
  author: z.string(),
  /** The display title for the blog */
  title: z.string(),
  /** A short description of the blog for SEO purposes */
  description: z.string().nullish(),
  /** The date and/or time on which the post was (or will be) published  */
  date: z.string().transform(str =>
    Intl.DateTimeFormat('en-US-u-hc-h12', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }).format(Date.parse(str))
  ),
  /** The date and/or time of the last update to the blog post */
  updated: z
    .string()
    .nullish()
    .transform(val => (typeof val === 'string' ? new Date(val) : val)),
});

/**
 * An object representing the parsed contents of a blog's markdown source,
 * along with additional metadata for that blog.
 * @property {(slug)} slug - 
 * @property {(string)} date - The date and/or time on which the post was (or will be) published
 * @property {(string)} updated - The date and/or time of the last update to the blog post
 * @property {(string)} author - The name of the accredited author for this post
 * @property {(string)} preview - Either the author's description, or if none, the first text
 * paragraph of the parsed Markdown content - without line breaks and truncated to 160 characters.
 * @property {(string)} markdown - The raw markdown with the frontmatter removed.
 * @property {(string | null)} next - The slug for the next post (by date). Null for the latest post.
 * @property {(string | null)} prev - The slug for the previous post (by date). Null for the earliest post.
 */
export const BlogPostSchema = FrontmatterSchema.merge(
  z.object({
    date: z.string(),
    updated: z.string().nullish(),
    slug: z.string(),
    preview: z.string().max(160),
    markdown: z.string(),
    next: z.string().nullish(),
    prev: z.string().nullish(),
  })
);

export const slugIsValid: Assertion = file => {
  const own = {}.hasOwnProperty;
  if (!own.call(file.data, 'slug')) {
    throw new Error('Missing slug');
  }
  if (typeof file.data.slug !== 'string') {
    throw new Error('Slug must be a string');
  }
  if (/[^A-Za-z0-9\-]/g.test(file.data.slug)) {
    throw new Error('Slug must only contain letters, numbers, and dashes');
  }
};
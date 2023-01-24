import {GetStaticProps, NextPage} from 'next';
import Link from 'next/link';
/**
 *
 * @param {string} rootPath - path to the blog directory
 * @returns {string[]} - array of blog post paths
 */
export const getStaticProps: GetStaticProps = async () => {
  const { default: getBlogSlugs } = await import('../../server/getBlogSlugs');
  const slugs = getBlogSlugs('src/pages/blog');
  return {
    props: {
      slugs,
    },
  };
};

const BlogIndex: NextPage<{slugs: string[]}> = props => {
  const {slugs} = props;
  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {slugs.map(slug => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogIndex;

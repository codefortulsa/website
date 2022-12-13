import {GetStaticProps, NextPage} from 'next';
import Link from 'next/link';
import fs from 'node:fs';

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync('src/pages/blog/', {withFileTypes: true});
  const slugs = files
    .filter(
      file =>
        file.isDirectory() &&
        fs
          .readdirSync(`src/pages/blog/${file.name}`, {withFileTypes: true})
          .some(file => file.name === 'index.mdx')
    )
    .map(file => file.name);
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

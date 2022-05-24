import Link from "next/link";
import HomeLayout from "../../features/landing-page/HomeLayout";
import blogPostsSingleton from "../../features/blog/blogdata";

import type { NextPageWithLayout } from "../_app";
import type { GetStaticProps } from "next";
import type { BlogPost } from "../../features/blog/blogdata";

type PageProps = {
  posts: Array<BlogPost & { slug: string }>;
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const blogs = await blogPostsSingleton;
  return {
    props: {
      posts: Array.from(blogs.keys()).map((slug) => ({
        slug,
        ...blogs.get(slug)!,
      })),
    },
  };
};

const BlogIndex: NextPageWithLayout<PageProps> = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <>
        <p>No blog posts found.</p>
      </>
    );
  }

  return (
    <>
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link href={`/blog/${post.slug}`} itemProp="url">
                      <a itemProp="headline">{post.title}</a>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                </header>
                <section>
                  <p itemProp="description">{post.preview}</p>
                </section>
              </article>
            </li>
          );
        })}
      </ol>
    </>
  );
};

// Override the default layout
BlogIndex.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;

export default BlogIndex;
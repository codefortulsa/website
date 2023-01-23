import {readdirSync} from 'fs';

/**
 *
 * @param {string} rootDirectoryPath - path to the blog directory
 * @returns {string[]} - array of blog post slugs
 */
export default function getBlogSlugs(rootDirectoryPath: string) {
  if (typeof window !== 'undefined') {
    throw new Error(
      'getBlogSlugs should only be called on the server; inside getStaticPaths, getStaticProps, getServerSideProps, or getInitialProps'
    );
  };
  return readdirSync(rootDirectoryPath, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => `${rootDirectoryPath}/${dirent.name}`)
    .filter(path => hasMarkdownIndex(path))
    .map(path => path.replace(`${rootDirectoryPath}/`, ''));
}

/**
 * Checks if a directory has an index.md or index.mdx file
 * @param {string} directoryPath - path to the directory to check
 * @returns {boolean} - true if the directory has an index.md or index.mdx file
 */
function hasMarkdownIndex(directoryPath: string) {
  return readdirSync(directoryPath, {withFileTypes: true}).some(
    dirent => dirent.isFile() && /^index\.mdx?$/.test(dirent.name)
  );
}

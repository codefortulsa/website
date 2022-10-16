//const { default: remarkValidateVfile, default: remarkValidateVFile } = require('remark-validate-vfile');
//const { default: remarkMorematter } = require('remark-morematter');
//const { default: yaml } = require('yaml');
//const { FrontmatterSchema, slugIsValid } = require('./src/features/blog/ValidatorsAndTypes');

///** @type {import('remark-morematter').Options} */
//const remarkMorematterConfig = {
//  failOnError: false,
//  handlers: {
//    yaml: {
//      parser: yaml.parse,
//      validator: FrontmatterSchema.parse,
//    },
//  },
//}
//
///** @type {import('remark-validate-vfile').Options} */
//const remarkValidateVFileConfig = {
//  assertions: slugIsValid,
//  failOnError: false
//}

/**
 * ESModules can't be require'd, so we have to use dynamic import.
 * Fortunately, `next.config.js` can export a promise, so we wrap everything in an async function.
 */
const nextConfigAsync = async () => {
  const nextConfig = /** @type {import('next').NextConfig} */ ({
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    images: {
      domains: [
        /* via.placeholder.com domain should be removed for production */
        'via.placeholder.com',
        'raw.githubusercontent.com',
        'user-images.githubusercontent.com',
      ],
    },
  });
  const remarkGfm = (await import('remark-gfm')).default;
  const remarkFrontmatter = (await import('remark-frontmatter')).default;

  const recmaStaticImages = (await import('recma-next-static-images')).default;
  const recmaStaticImagesConfig =
    /** @type {import('recma-next-static-images').Options} */ ({
      cacheDirectory: './public/__generated',
    });

  const configureMDX = (await import('@next/mdx')).default;
  const withMDX = configureMDX({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [
        remarkGfm,
        remarkFrontmatter,
        //   [remarkMorematter,  remarkMorematterConfig],
        //   [remarkValidateVFile, remarkValidateVFileConfig],
      ],
      rehypePlugins: [],
      recmaPlugins: [
        [recmaStaticImages, recmaStaticImagesConfig],
      ],
      providerImportSource: '@mdx-js/react',
    },
  });
  return withMDX(nextConfig);
};

module.exports = nextConfigAsync();

import { GatsbyConfig } from "gatsby";
import path from 'path'

const config: GatsbyConfig = {
    siteMetadata: {
      title: `Code For Tulsa Official Website`,
      description: `An Official brigade of Code for America`,
      siteUrl: `https://codefortulsa.org/`,
      social: {
        twitter: `CodeForTulsa`,
        slack: `https://slack.techlahoma.org/`,
        github: `CodeForTulsa`,
        facebook: `CodeForTulsa`
      },
    },
    plugins: [
      `gatsby-plugin-postcss`,
      `gatsby-plugin-image`,
      {
        resolve: `gatsby-plugin-graphql-codegen`,
        options: {
          fileName: `./gatsby-graphql.ts`,
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          // Can't use __dirname in TS gatsby-config
          path: path.resolve('content/blog'),
          name: `blog`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `asset`,
          // Can't use __dirname in TS gatsby-config
          path: path.resolve('content/asset'),
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `cou`,
          // Can't use __dirname in TS gatsby-config
          path: path.resolve('content/cou'),
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 630,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.0725rem`,
              },
            },
            `gatsby-remark-prismjs`,
            `gatsby-remark-copy-linked-files`,
            `gatsby-remark-smartypants`,
          ],
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-react-helmet`,
    ],
  }
  

export default config
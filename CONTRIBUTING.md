# Contributing Guide

---

<!--TODO: 
    This short description should outline who may contribute and what types of contribution are welcome.
-->
<!--TODO: 
    This long description should summarize the submission process and act as a brief overview of any prerequisites, such as review, discussion, testing, staging, etc. Other important information may be provided here, as well. Long-winded explanations are often best suited for a seperate section.
-->
We welcome contributions...

<!--ts-->
* [Contributing Guide](#contributing-guide)
   * [Getting Started](#getting-started)
   * [Learn More](#learn-more)
   * [Deploy on Vercel](#deploy-on-vercel)
   * [Getting Started](#getting-started-1)
   * [Requirements](#requirements)
   * [Usage/Examples](#usageexamples)
   * [Tech Stack](#tech-stack)
   * [Color Reference](#color-reference)
   * [Deployment](#deployment)
   * [Running Tests](#running-tests)
   * [Documentation](#documentation)
   * [Run Locally](#run-locally)
* [Contributing Guidelines](#contributing-guidelines)
   * [Prerequisites:](#prerequisites)
   * [Gatsby](#gatsby)
   * [GraphQL](#graphql)
      * [<strong>GraphQL in Gatsby</strong> (<a href="https://www.gatsbyjs.com/docs/reference/graphql-data-layer/" rel="nofollow">docs</a>)](#graphql-in-gatsby-docs)
         * [<strong>GraphQL in Components</strong>](#graphql-in-components)
         * [<strong>GraphQL in Pages</strong>](#graphql-in-pages)
      * [<strong>Creating Queries</strong> (<a href="https://www.gatsbyjs.com/docs/how-to/querying-data/" rel="nofollow">docs</a>)](#creating-queries-docs)
   * [Tailwind](#tailwind)
   * [Typescript](#typescript)
   * [Technologies Used](#technologies-used)
      * [Developers](#developers)
      * [Designers](#designers)
   * [Setup](#setup)
   * [Room for Improvement](#room-for-improvement)
   * [Contact](#contact)

<!-- Created by https://github.com/ekalinin/github-markdown-toc -->
<!-- Added by: alec, at: Fri Jun 17 16:29:05 CDT 2022 -->

<!--te-->
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Getting Started

To get started, fork this repo and open it in your editor of choice. For the best developer experience, [VSCode](code.visualstudio.com/download) is recommended, as are the recommended extensions configured for the workspace.

## Requirements


`// TODO: How can we clarify this?`
Additional features beyond the weblog and static site should be documented and proposed in a new directory pushed to the /dev branch.
Feature proposals should include the proposed functionality, purpose, a timeline for development, and list any
additional Gatsby plugins needed (or external technologies required).




## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Documentation

....  

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

# Contributing Guidelines

---

## Prerequisites:
 - [Node.js](https://nodejs.org/en/download/)
 - yarn

**Install nvm**:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
or, using wget:
```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
 
**Install npm and yarn**:

```bash
nvm install 16.14.2
npm install -g yarn
```

**Install dependencies**:

```bash
 yarn global add gatsby-cli && yarn install
```

**Start the development server:**
```bash
yarn run develop
```

If you encounter unexpected behavior, first try clearing the cache and generated types with `yarn run clean`.

**It is highly recommended that you familiarize yourself with the following**:

- [React 17+](https://reactjs.org/docs/getting-started.html#learn-react) (especially [React Hooks](https://reactjs.org/docs/hooks-reference.html))
- [Gatsby 4+](#gatsby)
- [GraphQL](#graphql)
- [Tailwind CSS](#tailwind)
- [Typescript](#typescript) (_Optional_)

If you can't install VSCode locally, you can use it in the browser for free with either [vscode.dev](vscode.dev) or [Gitpod](gitpod.io), both of which you can use with your Github account. Gitpod's free tier includes 50hours/month. Unfortunatly, the recommended workspace extensions currently only work in the browser when using Gitpod.

## Gatsby

---

**[Full Documentation](https://www.gatsbyjs.com/docs/)**

Gatsby is a React framework for building static websites. It's main feature is a Graph-QL data layer which is composed from the configured data sources at build-time. For example, the data can be sourced from the filesystem, external database queries, or API calls. This project currently pulls data from the following sources:

- [gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem) pulls from the filesystem to add the following nodes to the GraphQL schema:
  - file / allFile
  - dir / allDir
  - markdownRemark / allMarkdownRemark (via [gatsby-transformer-remark](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-remark/README.md))
  - imageSharp / allImageSharp (via [gatsby-transformer-sharp](https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/))
- **Coming Soon**: [gatsby-source-apiserver](https://www.gatsbyjs.com/plugins/gatsby-source-apiserver) will add Nodes for event data fetched from the Meetup API

## GraphQL

---

**[Full Documentation](https://graphql.org/learn/)**

While a full understanding of GraphQL is not required in order to contribute, the following guidelines provide context for GraphQL features used in this website and their relation to the Gatsby framework.

### **GraphQL in Gatsby** ([docs](https://www.gatsbyjs.com/docs/reference/graphql-data-layer/))

If you already have the GraphQL query defined for the feature you're working on, you don't need to know much (if anything) about GraphQL.

- [Read Here](#typescript) to see how you can get code hinting and type checking for the data returned by queries
- [Read Here](#graphql-in-components) to learn about consuming queries in components
- [Read Here](#graphql-in-pages) to learn about consuming queries in Pages (including pages generated by gatsby-node.ts)

If you are creating, editing, or extending a GraphQL query, see [Creating Queries](#creating-queries) below.

#### **GraphQL in Components**

GraphQL queries can be used in components in one of two ways

- The [StaticQuery component](https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/)
- The [useStaticQuery Custom Hook](https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/)

#### **GraphQL in Pages**

GraphQL queries in pages are exported from the page component and passed into the component as props.

Read more about **[page queries](https://www.gatsbyjs.com/docs/how-to/querying-data/page-query/)**

Read about using **[arguments](https://graphql.org/learn/queries/#arguments)** in GraphQL queries

### **Creating Queries** ([docs](https://www.gatsbyjs.com/docs/how-to/querying-data/))

When creating GraphQL Queries, please follow the following guidelines:

- Make use of the GraphiQL explorer at [host]:[port]/\_\_graphql
- Name your queries (this makes it easy to use types generated by gatsby-plugin-graphql-codegen)

In addition to the nodes [described above](#gatsby), The following nodes in the GraphQL schema store information about the project and site metadata:

 - site / allSite
 - siteBuildMetadata / allSiteBuildMetadata
 - siteFunction / allSiteFunction
 - sitePage / allSitePage
 - sitePlugin / allSitePlugin

## Tailwind

---

**[Full Documentation](https://tailwindcss.com)**

If you're unfamiliar with Tailwind CSS, you'll want to brush up on the [Core Concenpts](https://tailwindcss.com/docs/utility-first).

It's recommended that developers stick with the idiomatic approach of preferring in-line utility classes. The recommended vscode extensions in this workspace enable code hinting for the predefined classes.

## Typescript

---

**[Full Documentation](https://www.typescriptlang.org/docs/)**

Using Typescript is optional (though recommended). TypeScript is supported, out of the box, by [gatsby-plugin-typescript](https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript)

If you don't want to use typescript, simply create any new files with a `.js` or `.jsx` file extension, and ignore any TypeScript warnings (indicated by `ts(...)` near the end of the warning) in existing `.ts` or `.tsx` files.

Check out the [React-Typescript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) for an excellent reference on all things React + TypeScript.

Data returned from a GraphQL query can be typed by [gatsby-plugin-graphql-codegen](https://www.gatsbyjs.com/plugins/gatsby-plugin-graphql-codegen). Check out the existing Typescript files for examples.

In summary:

1. Name any GraphQL queries (ensure that query names do not conflict).
2. Import the type from `gatsby-graphql.ts` as `[QueryName]Query`.
3. For components, type the props passed to the componenet using the imported type.
4. For pages, import the `PageProps` type from `gatsby`, and use it to wrap the imported types to create the prop type, e.g. `type Props = PageProps< [QueryName]Query >`.

**Note:** It is recommended to seperate type imports from regular imports using the `import type { x } from "y"` syntax in order to reduce the size of the production bundle.





## Technologies Used
- GatsbyJS 4 : [Documentation](https://www.gatsbyjs.com/docs)
- Tailwind CSS : [Documentation](https://tailwindcss.com/docs/installation)
- Typescript __Optional__: [Documentation](https://www.typescriptlang.org/docs/) - [Plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript) - [GraphQL Query Types](https://www.gatsbyjs.com/plugins/gatsby-plugin-graphql-codegen/)

### Developers
Check out [README_DEVELOPERS.md](./README_DEVELOPERS.md)

### Designers
Designers contributing to static site updates or stand-alone event pages should read the [Design Documentation] <!-- link forthcoming -->.
Stand-alone pages should be initially pushed as a link to a figma; CSS adjustments and other design contributions can be pushed directly 
to the relevant /src directories on the /dev branch. Potential contributors should understand the [Tailwind CSS](https://tailwindcss.com/docs/installation) framework and how Gatsby [handles CSS and templating](https://www.gatsbyjs.com/docs/how-to/styling/).

	### Writers
Blog post contributors must format their posts using [Markdown](https://ghost.org/changelog/markdown/) and upload them in a folder 
along with any media included within the blog to the [/content/blog](https://github.com/codefortulsa/website/tree/main/content/blog) directory. 
Blog posts should likewise be pushed to the /dev branch for staging.


## Setup
- All contributing designers and developers should ensure their local environment [has Gastby installed](https://www.gatsbyjs.com/docs/tutorial/part-0/#installation-guide). 
- Clone into the /dev branch locally, either using the Github Desktop GUI or the CLI as below.
``` git clone -b dev https://github.com/codefortulsa/website.git ```
- To run tests and view your local edits, navigate into the site's local directory and let Gatsby do the work:
``` 
 cd */website/
 gatsby develop 
```
- All initial contributions should be pushed to the /dev branch for review. Commit messages should follow best practices 
and highlight additions and edits made within each push. 

## Room for Improvement

Room for improvement:
 - Modernize Design
 - Create Structured and Sustainable Workflow

To do:
 - Create Figma mock-up
 - Implement new design with Tailwind CSS 
 - Create GitHub Action to automate workflow
 - Launch / *Party*





## Contact


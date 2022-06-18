# Contributing Guide

---

<!--TODO: 
    This short description should outline who may contribute and what types of contribution are welcome.
-->We welcome contributions...

<!--TODO: 
    This long description should summarize the submission process and act as a brief overview of any prerequisites, such as review, discussion, testing, staging, etc. Other important information may be provided here, as well. Long-winded explanations are often best suited for a seperate section.
-->Additional features beyond the weblog and static site should be documented and proposed in a new directory pushed to the /dev branch.
Feature proposals should include the proposed functionality, purpose, a timeline for development, and list any
additional technologies required.

<!--ts-->
   * [Getting Started <em>TO-DO</em>](#getting-started-to-do)
   * [Technologies <em>TO-DO</em>](#technologies-to-do)
      * [Tailwind](#tailwind)
      * [Typescript](#typescript)
   * [Prerequisites:](#prerequisites)
   * [Deployment](#deployment)
   * [Running Tests](#running-tests)
   * [Run Locally](#run-locally)
   * [Learn More](#learn-more)
   * [Usage/Examples](#usageexamples)
   * [Documentation](#documentation)
      * [Designers](#designers)
         * [Color Reference](#color-reference)
      * [Writers](#writers)
   * [Room for Improvement](#room-for-improvement)

<!-- Created by https://github.com/ekalinin/github-markdown-toc -->
<!-- Added by: alec, at: Sat Jun 18 14:53:13 CDT 2022 -->

<!--te-->
## Getting Started *TO-DO*

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- Clone into the /dev branch locally, either using the Github Desktop GUI or the CLI as below.
``` git clone -b dev https://github.com/codefortulsa/website.git ```
- To run tests and view your local edits, navigate into the site's local directory and let Gatsby do the work:
``` 
 cd */website/
 gatsby develop 
```
- All initial contributions should be pushed to the /dev branch for review. Commit messages should follow best practices 
and highlight additions and edits made within each push. 


To get started, fork this repo and open it in your editor of choice. For the best developer experience, [VSCode](code.visualstudio.com/download) is recommended, as are the recommended extensions configured for the workspace.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies *TO-DO*

**Client:** Next, React, Typescript, TailwindCSS
**Server:** Next, Node, Express, Unified

- Tailwind CSS : [Documentation](https://tailwindcss.com/docs/installation)
- Typescript __Optional__: [Documentation](https://www.typescriptlang.org/docs/) - [Plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript) - [GraphQL Query Types](https://www.gatsbyjs.com/plugins/gatsby-plugin-graphql-codegen/)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Tailwind

---

**[Full Documentation](https://tailwindcss.com)**

If you're unfamiliar with Tailwind CSS, you'll want to brush up on the [Core Concenpts](https://tailwindcss.com/docs/utility-first).

It's recommended that developers stick with the idiomatic approach of preferring in-line utility classes. The recommended vscode extensions in this workspace enable code hinting for the predefined classes.

### Typescript

---

**[Full Documentation](https://www.typescriptlang.org/docs/)**

Using Typescript is optional (though recommended).

If you don't want to use typescript, simply create any new files with a `.js` or `.jsx` file extension and, optionally, ignore any TypeScript warnings [indicated by `ts(...)` near the end of the warning].

Check out the [React-Typescript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) for an excellent reference on all things React + TypeScript.

**Note:** It is recommended to seperate type imports from regular imports using the `import type { x } from "y"` syntax in order to reduce the size of the production bundle.


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

## Deployment

## Running Tests

## Run Locally

## Learn More

**It is highly recommended that you familiarize yourself with the following**:

- [React 17+](https://reactjs.org/docs/getting-started.html#learn-react) (especially [React Hooks](https://reactjs.org/docs/hooks-reference.html))
- [GraphQL](#graphql)
- [Tailwind CSS](#tailwind)
- [Typescript](#typescript) (_Optional_)

If you can't install VSCode locally, you can use it in the browser for free with either [vscode.dev](vscode.dev) or [Gitpod](gitpod.io), both of which you can use with your Github account. Gitpod's free tier includes 50hours/month. Unfortunatly, the recommended workspace extensions currently only work in the browser when using Gitpod.

## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

## Documentation

### Designers
Designers contributing to static site updates or stand-alone event pages should read the [Design Documentation] <!-- link forthcoming -->.
Stand-alone pages should be initially pushed as a link to a figma; CSS adjustments and other design contributions can be pushed directly 
to the relevant /src directories on the /dev branch. Potential contributors should understand the [Tailwind CSS](https://tailwindcss.com/docs/installation) framework.
#### Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


### Writers
Blog post contributors must format their posts using [Markdown](https://ghost.org/changelog/markdown/) and upload them in a folder 
along with any media included within the blog to the [/content/blog](https://github.com/codefortulsa/website/tree/main/content/blog) directory. 
Blog posts should likewise be pushed to the /dev branch for staging.

## Room for Improvement

Room for improvement:
 - Modernize Design
 - Create Structured and Sustainable Workflow

To do:
 - Create Figma mock-up
 - Implement new design with Tailwind CSS 
 - Create GitHub Action to automate workflow
 - Launch / *Party*
# Contributing Guide

---

<!--TODO: 
    This short description should outline who may contribute and what types of contribution are welcome.
-->We welcome contributions from writers, designers, policymakers, developers, and people just learning to code. Below is a description of the technical details for contributing to the codebase. For contributions in non-technical areas, please reach out to [Brigade Captain, Carlos Moreno](mailto:tulsadesigner@gmail.com) aka @chimchim on the Techlahoma slack. 

<!--TODO: 
    This long description should summarize the submission process and act as a brief overview of any prerequisites, such as review, discussion, testing, staging, etc. Other important information may be provided here, as well. Long-winded explanations are often best suited for a separate section.
-->
Feature proposals should include the proposed functionality, purpose, a timeline for development, and list any
additional technologies required. Contact [Project Lead, Erich Keil](mailto:erich@zenlex.dev) aka @zenlex on the Techlahoma slack. 

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

- Clone the repo start from the current `dev` branch
``` git clone -b dev https://github.com/codefortulsa/website.git ```

To get started, fork or clone this repo and open it in your editor of choice. For the best developer experience, [VSCode](code.visualstudio.com/download) is recommended, as are the recommended extensions configured for the workspace.

If you clone the repo and wish to make a contribution, contact our support team (see [readme](./README.md/#support)) to gain write access to the repository. 

## Branch Policies
- Please push squashed commits with descriptive messages. 
- Please push to a branch in the format {type}/{what it does}. 
- Pushing directly to `dev` or `main` is not allowed. 

### Current types for branch names: 
- feature,
- bugfix, 
- content, 
- housekeeping. 

*So a good branch name would be something like `feature/landing-page` or `bugfix/twitter-widget`. * 

*Whenever possible please link pull requests to issues.* 

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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
- [NextJS](https://nextjs.org/docs/getting-started)
- [Tailwind CSS](#tailwind)
- [Typescript](#typescript) (_Optional_)

If you can't install VSCode locally, you can use it in the browser for free with either [vscode.dev](vscode.dev) or [Gitpod](gitpod.io), both of which you can use with your Github account. Gitpod's free tier includes 50hours/month. Unfortunately, the recommended workspace extensions currently only work in the browser when using Gitpod.

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
to the relevant /src directories on a /style/{descriptor} branch. Potential contributors should understand the [Tailwind CSS](https://tailwindcss.com/docs/installation) framework.
#### Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


### Writers
- Blog post contributors must format their posts using [Markdown](https://ghost.org/changelog/markdown/).
- Upload them in a new folder at `src/pages/blog/{folder-name}` on the `content/blog` branch. 
- Name the markdown file `index.md` and place it in the new folder with any images. 
- You can do this directly on github - just create a new file at `src/pages/{blog-title}/index.md`
- [Blog Branch/Folder Direct Link](https://github.com/codefortulsa/website/tree/content/blog/src/pages/blog)
- The folder's name will become the URL slug so the blog will be published at codefortulsa.org/blog/{folder-name}
- To publish blog, create a pull request from the `content-blog` branch to the `dev` branch.

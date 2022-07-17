<div align=center>

# Code For Tulsa Official Website
![Code For Tulsa Logotype](https://raw.githubusercontent.com/codefortulsa/website/main/content/asset/cft%20full%20name(cropped).png)

[![site status](https://img.shields.io/website?logo=heroku&url=https%3A%2F%2Fcodefortulsa.org&style=plastic)](https://codefortulsa.org)
[![Deploy to Staging](https://github.com/codefortulsa/website/actions/workflows/deploy-staging.yml/badge.svg?branch=dev)](https://github.com/codefortulsa/website/actions/workflows/deploy-staging.yml)
[![version](https://img.shields.io/github/package-json/v/codefortulsa/website?logo=semver&style=plastic)](https://semver.org/)
[![license](https://img.shields.io/github/license/codefortulsa/website?logo=open-source-initiative&color=%233da639&style=plastic)](https://choosealicense.com/licenses/)<br>
[![contributor count](https://img.shields.io/github/contributors/codefortulsa/website?color=blue&logo=github&style=flat-square)](https://github.com/codefortulsa/website/graphs/contributors)
[![commit frequency](https://img.shields.io/github/commit-activity/m/codefortulsa/website?color=blue&logo=github&style=flat-square)](https://github.com/codefortulsa/website/graphs/commit-activity)
[![last commit](https://img.shields.io/github/last-commit/codefortulsa/website?color=blue&logo=github&style=flat-square)](https://github.com/codefortulsa/website/commits/main)<br>
[![follow on twitter](https://img.shields.io/twitter/follow/codefortulsa?style=social)](https://twitter.com/intent/follow?screen_name=codefortulsa)
[![find us on the Techlahoma slack](https://img.shields.io/badge/Techlahoma-000?style=social&logo=slack&label=join%20our%20Slack%20workspace)](https://techlahoma.slack.com/)

[![bootstrapped with NextJS](https://img.shields.io/github/package-json/dependency-version/codefortulsa/website/next?color=black&label=nextjs&logo=next.js)](https://nextjs.org)
[![made with react](https://img.shields.io/github/package-json/dependency-version/codefortulsa/website/react?color=%2361dafb&logo=react)](https://reactjs.org/)
[![markdown support with unified.js](https://img.shields.io/github/package-json/dependency-version/codefortulsa/website/unified?color=white&logo=markdown)](https://unifiedjs.com/)
[![typed with typescript](https://img.shields.io/github/package-json/dependency-version/codefortulsa/website/dev/typescript?logo=typescript)](https://www.typescriptlang.org/)
[![pre-processed with postcss](https://img.shields.io/github/package-json/dependency-version/codefortulsa/website/dev/postcss?color=%23DD3A0A&logo=postcss&logoColor=%23DD3A0A)](https://postcss.org/)
[![styled with tailwindcss](https://img.shields.io/github/package-json/dependency-version/codefortulsa/website/dev/tailwindcss?color=%2338bdf8&logo=tailwindcss)](https://tailwindcss.com/)
[![linted with eslint](https://img.shields.io/github/package-json/dependency-version/codefortulsa/website/dev/eslint?color=%238080F2&logo=eslint&logoColor=%238080F2)](https://eslint.org)

</div>

---

Code For Tulsa, an official brigade of Code For America, hosts a website and blog at [codefortulsa.org](codefortulsa.org).  This is that website's working repository.

The Code for Tulsa website aims to be a beacon for engagement in civic tech volunteer opportunities within the greater Tulsa area.

*The site is currently undergoing a major update. See below for more information*

## Links
- [Figma Mockup](https://www.figma.com/file/maf7XD1XhbIKlJn77P2tIS/Code-for-Tulsa-Website?node-id=0%3A1)
- [Project Board](https://github.com/orgs/codefortulsa/projects/13)
- [Staging Environment](http://cft-website-staging.herokuapp.com/)
- Slack Channel (Techlahoma) - #ug-code-for-tulsa-website

## Table of Contents
<!--ts-->
   * [Background](#background)
   * [Installation](#installation)
      * [Pre-Requisites](#pre-requisites)
      * [Local Development](#local-development)
      <!-- * [Production Build - TODO](#production-build---todo) -->
   * [Features](#features)
   * [Known Issues / Limitations](#known-issues--limitations)
      * [Site](#site)
      * [Blog](#blog)
      * [SEO](#seo)
   <!-- * [Screenshots - <em>TO-DO</em>](#screenshots---to-do) -->
   <!-- * [FAQ - <em>TO-DO</em>](#faq---to-do) -->
   * [Maintainers](#maintainers)
   * [Support](#support)
   <!-- * [Acknowledgements - <em>TO-DO</em>](#acknowledgements---to-do) -->
   * [Leadership](#leadership)
   * [Inspiration](#inspiration)
   * [Utilities](#utilities)
   * [Contributing](#contributing)
   * [Code of Conduct](#code-of-conduct)
   <!-- * [License - <em>TO-DO</em>](#license---to-do) -->

<!-- Created by https://github.com/ekalinin/github-markdown-toc -->
<!-- Added by: alec, at: Thu Jun 16 21:31:09 CDT 2022 -->

<!--te-->


## Background
  This repo started as an effort to modernize the core site and create a dynamic working environment that facilitates additional contributions from current and future volunteers of all backgrounds.

 In the early stages of this redesign project, the requirements were simple: create a web blog that facilitates content contributions from non-technical volunteers. Because of this, the project was initially bootstrapped as a static Gatsby site.

 Soon after, discussions began about integrating other resources utilized by the organization, such as Twitter, Slack, Meetup, etc. It was agreed that a more flexible framework was desired to keep up with the dynamic demands of the organization and provide broader variety for volunteer engagement. The project was migrated to Next.Js in January 2022 and adapted for deployment on serverless platforms.
 
 While the infrastructure now exists for more complex features, every effort should be made to implement them in as low resource/cost-effective a manner as possible by using static or incremental generation, external APIs, and client-side offloading wherever possible.

## Installation

### Pre-Requisites
Install the LTS version of Node:
```sh
# via nvm (recommended) https://github.com/nvm-sh/nvm
https://github.com/nvm-sh/nvm

# via pre-built installer
https://nodejs.dev/download/
```
Install Yarn:
```sh
npm install --global yarn
```
### Local Development
Clone the repo and cd into the directory:
```sh
git clone https://github.com/codefortulsa/website.git ./code-for-tulsa-website
cd ./code-for-tulsa-website
```
Install packages & start the dev server:
```sh
yarn install
yarn dev
```

Run e2e and component tests with Cypress locally:
- Launch app:
```sh
yarn build
yarn start
OR
yarn dev
``` 
- In separate process:
run headless in terminal:
```sh
yarn test
```
run with cypress ui:
```sh
yarn cypress:ui
```
<!-- ### Production Build - TODO -->

## Features

- Landing Page (in progress)
- Join Us - A Page on ways to get involved (in progress)
- Web Blog (in progress)
- Event Calendar with Meetup Integration (in progress)
- Twitter integration (in progress)
- Low-Code Utils for Organizers and Content Creators (in progress)

## Known Issues / Limitations
*the site is undergoing an overhaul. If you'd like to contribute content, design, or development, please reach out to [our team](#support)*
### Site
 - Design work needs polish
 - Missing core features
### Blog
 - Components are raw and unstyled
 - Posts can only include images from a web address (absolute URL)
 - Links within posts are not optimized for client side rendering
 - Code blocks lack syntax highlighting
### SEO
 - Not optimized for generated pages
 - May be generic on some pages

<!-- ## Screenshots - *TO-DO*
![App Screenshot](https://via.placeholder.com/234x150?text=TO+DO) -->

<!-- ## FAQ - *TO-DO* -->

## Maintainers/Contributors
- Project Lead - [Erich Keil](https://github.com/zenlex)
- Content Lead - [Carlos Moreno](https://github.com/chimchim237)
- Development Lead - [Alec Helmturner](https://github.com/alecvision)
- Front End Contributor - [Nicole Janeway Bills](https://github.com/NicoleJaneway)
- Front End Contributor - [Matt Gardner](https://github.com/allthesignals)
- Documentation Contributor - [Grace Fallon](https://github.com/angelofgrace) 
- Additional Contributors:
[Isaac Ahlfield](https://github.com/higherkey),

## Support
Volunteer Contact for Website Development: 
- Project Lead - [Erich Keil](mailto:erich@zenlex.dev) <!-- (Link to Email) -->

Volunteer Contact for all other areas:
- Code for Tulsa Brigade Captain - [Carlos Moreno](mailto:tulsadesigner@gmail.com) <!-- (Link to Email -->

<!-- ## Acknowledgements - *TO-DO*
We would like to acknowledge the following organizations, projects, and services: -->

### Leadership
 - [The Techlahoma Foundation](https://www.techlahoma.org/)
 - [Code for America](https://www.codeforamerica.org/)
### Inspiration
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [Standard Readme](https://github.com/RichardLitt/standard-readme)
 - [READMINE](https://github.com/mhucka/readmine)
### Utilities
 - [Github Markdown TOC](https://github.com/ekalinin/github-markdown-toc)
 - [Readme.so](https://readme.so/)
 - [Shields.io](https://shields.io/)

## Contributing
We welcome contributions from participants of all backgrounds! **Writers**, **designers**, and **developers** should read [CONTRIBUTING.md](./CONTRIBUTING.md) to learn more. You can also [reach out to us](#Support) - we're friendly!

### Code of Conduct
Code For Tulsa is a user group umbrellaed under the Techlahoma Foundation. All Code For Tulsa contributors, participants, and organizers must adhere to the [Techlahoma Code of Conduct](https://www.techlahoma.org/code-of-conduct).

<!-- ## License - *TO-DO*
[*TO-DO*](https://choosealicense.com/licenses/) -->

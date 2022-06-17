<div align=center>

# Code For Tulsa Official Website
![Code For Tulsa Logotype](https://raw.githubusercontent.com/codefortulsa/website/main/content/asset/cft%20full%20name(cropped).png)

[![site status](https://img.shields.io/website?logo=heroku&url=https%3A%2F%2Fcodefortulsa.org&style=plastic)](https://codefortulsa.org)
[![version](https://img.shields.io/github/package-json/v/codefortulsa/website?logo=semver&style=plastic)](https://semver.org/)
[![license](https://img.shields.io/github/license/codefortulsa/website?logo=open-source-initiative&color=%233da639&style=plastic)](https://choosealicense.com/licenses/)<br>
[![contributer count](https://img.shields.io/github/contributors/codefortulsa/website?color=blue&logo=github&style=flat-square)](https://github.com/codefortulsa/website/graphs/contributors)
[![commit frequency](https://img.shields.io/github/commit-activity/m/codefortulsa/website?color=blue&logo=github&style=flat-square)](https://github.com/codefortulsa/website/graphs/commit-activity)
[![last commit](https://img.shields.io/github/last-commit/codefortulsa/website?color=blue&logo=github&style=flat-square)](https://github.com/codefortulsa/website/commits/main)<br>
[![follow on twitter](https://img.shields.io/twitter/follow/codefortulsa?style=social)](https://twitter.com/intent/follow?screen_name=codefortulsa)
[![find us on the Techlahoma slack](https://img.shields.io/badge/Techlahoma-000?style=social&logo=slack&label=join%20our%20Slack%20workspace)](https://techlahoma.slack.com/)

[![boostrapped with nextjs](https://img.shields.io/github/package-json/dependency-version/codefortulsa/website/next?color=black&label=nextjs&logo=next.js)](https://nextjs.org)
[![made with react](https://img.shields.io/github/package-json/dependency-version/codefortulsa/website/react?color=%2361dafb&logo=react)](https://reactjs.org/)
[![markdown support with unified.js](https://img.shields.io/github/package-json/dependency-version/codefortulsa/website/unified?color=white&logo=markdown)](https://unifiedjs.com/)
[![typed with typescript](https://img.shields.io/github/package-json/dependency-version/codefortulsa/website/dev/typescript?logo=typescript)](https://www.typescriptlang.org/)
[![pre-processed with postcss](https://img.shields.io/github/package-json/dependency-version/codefortulsa/website/dev/postcss?color=%23DD3A0A&logo=postcss&logoColor=%23DD3A0A)](https://postcss.org/)
[![styled with tailwindcss](https://img.shields.io/github/package-json/dependency-version/codefortulsa/website/dev/tailwindcss?color=%2338bdf8&logo=tailwindcss)](https://tailwindcss.com/)
[![linted with eslint](https://img.shields.io/github/package-json/dependency-version/codefortulsa/website/dev/eslint?color=%238080F2&logo=eslint&logoColor=%238080F2)](https://eslint.org)

</div>

---

Code For Tulsa, an official brigade of Code For America, hosts a website and blog [_here_](codefortulsa.org).  This is that website's working repository.

The Code for Tulsa website aims to be a beacon for any in search of civic engagement and industry volunteer opportunities within the greater Tulsa area.

## Table of Contents
<!--ts-->
   * [Background](#background)
   * [Installation](#installation)
      * [Pre-Requisites](#pre-requisites)
      * [Local Development](#local-development)
      * [Production Build - TODO](#production-build---todo)
   * [Features](#features)
   * [Known Issues / Limitations](#known-issues--limitations)
      * [Site](#site)
      * [Blog](#blog)
      * [SEO](#seo)
   * [Roadmap - <em>TO-DO</em>](#roadmap---to-do)
   * [Screenshots - <em>TO-DO</em>](#screenshots---to-do)
   * [FAQ - <em>TO-DO</em>](#faq---to-do)
   * [Maintainers - <em>TO-DO</em>](#maintainers---to-do)
   * [Support - <em>TO-DO</em>](#support---to-do)
   * [Acknowledgements - <em>TO-DO</em>](#acknowledgements---to-do)
      * [Leadership](#leadership)
      * [Inspiration](#inspiration)
      * [Utilites](#utilites)
   * [Contributing](#contributing)
      * [Code of Conduct](#code-of-conduct)
   * [License - <em>TO-DO</em>](#license---to-do)

<!-- Created by https://github.com/ekalinin/github-markdown-toc -->
<!-- Added by: alec, at: Thu Jun 16 21:31:09 CDT 2022 -->

<!--te-->
## Background
 As of the beginning of 2022, the Code for Tulsa website had not been updated in 6 years. This repo started as an effort to modernize the core site and create a dynamic working environment that facilitates additional contributions from current and future volunteers of all backgrounds.

 In the early stages of this redesign project, the requirements were simple: create a web blog that facilitates content contributions from non-technical volunteers. Because of this, the project was initially bootstrapped with create-gatsby-app as a static website.

 Soon after, discussions began brewing around the idea of integrating other resources utilized by the organization, such as Twitter, Slack, Meetup, etc. It was agreed that a more flexible framework was needed to keep up with the dynamic demands of the organization. Thus, the project was re-initialized with create-next-app and adapted for deployment on serverless platforms.
 
 While the infrastructure now exists for more complex features, every effort should be made to implement them in as cost-effective a manner as possible by using static or incremental generation, external APIs, and client-side offloading wherever possible.

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
### Production Build - TODO

## Features

- Landing Page (in progress)
- About Page with Contact Info (in progress)
- Calls to Action / Get Involved (in progress)
- Web Blog (in progress)
- Event Calendar with Meetup Integration (in progress)
- Twitter integration (in progress)
- Low-Code Utils for Organizers and Content Creators (in progress)

## Known Issues / Limitations

### Site
 - Lacks design
 - Lacks navigation
 - Missing core features
### Blog
 - Components are raw and unstyled
 - Posts can only include images from a web address
 - Links within posts are not optimized for client side rendering
 - Code blocks lack syntax highlighting
 - Lacking posts harvested from the previous site
### SEO
 - Not optimized for generated pages
 - May be generic on some pages

## Roadmap - *TO-DO*
 - *Landing Page*  
 - *About Page*  
 - *Calls to Action*  
 - *Twitter Integration*  
 - *Event Calendar & Meetup Integration*  

## Screenshots - *TO-DO*
![App Screenshot](https://via.placeholder.com/234x150?text=TO+DO)

## FAQ - *TO-DO*

## Maintainers - *TO-DO*
Project Lead - [Erich Keil](https://github.com/zenlex)
Front End Contributor - [Nicole Janeway](https://github.com/NicoleJaneway)
Content Lead - [Carlos Moreno](https://github.com/chimchim237)
Documentation - [Grace Fallon](https://github.com/angelofgrace)

## Support - *TO-DO*
Current Volunteer Contact for Website Development: [Erich Keil] <!-- (Link to Email) -->
General Code for Tulsa Contact: [Carlos Moreno] <!-- (Link to Email -->

## Acknowledgements - *TO-DO*
We would like to acknowledge the following organizations, projects, and services:

### Leadership
 - [The Techlahoma Foundation](https://www.techlahoma.org/)
 - [Code for Ameria](https://www.codeforamerica.org/)
### Inspiration
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [Standard Readme](https://github.com/RichardLitt/standard-readme)
 - [READMINE](https://github.com/mhucka/readmine)
### Utilites
 - [Github Markdown TOC](https://github.com/ekalinin/github-markdown-toc)
 - [Readme.so](https://readme.so/)
 - [Shields.io](https://shields.io/)

## Contributing
We welcome contributions from participants of all backgrounds! **Writers**, **designers**, and **developers** should read [CONTRIBUTING.md](./CONTRIBUTING.md) to learn more. You can also [reach out to us](#Support) - we're friendly!

### Code of Conduct
Code For Tulsa is a user group umbrellaed under the Techlahoma Foundation. All Code For Tulsa contributors, participants, and organizers must adhere to the [Techlahoma Code of Conduct](https://www.techlahoma.org/code-of-conduct).

## License - *TO-DO*
[*TO-DO*](https://choosealicense.com/licenses/)
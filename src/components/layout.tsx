import * as React from 'react';
import { Link } from "gatsby";

type LayoutProps = {
  location: typeof window.location;
  title: string;
  children: React.ReactNode
}

const Layout = ({ location, title, children }: LayoutProps) => {
  //@ts-ignore __PATH_PREFIX__ is a Gatsby-specific global not seen by typescript
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

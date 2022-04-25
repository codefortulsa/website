import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import type { NotFoundQuery } from '../../gatsby-graphql'

type NotFoundPageProps = PageProps<NotFoundQuery>

const NotFoundPage = ({ data, location }: NotFoundPageProps) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFound {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header.js"

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  console.log(edges)
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Lucida Sans Unicode",
        }}
      >
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return <div key={frontmatter.path}>{frontmatter.title}</div>
        })}
      </div>
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default Layout

import React from "react"
import { graphql, Link } from "gatsby"

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <div style={{ fontFamily: "Lucida Sans Unicode" }}>
      <div>Posts about {`${tagName}`}</div>
      <ul>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </li>
          )
        })}

        <div>
          <Link to="/tags">Browse by Tag</Link>
        </div>
      </ul>
    </div>
  )
}

export default SingleTagTemplate

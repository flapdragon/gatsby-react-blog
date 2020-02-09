import React from "react"
import { graphql, Link } from "gatsby"

const AllTagsTemplate = ({ data, pageContext }) => {
  console.log(pageContext)
  return (
    <div>
      <div>all tags here</div>
    </div>
  )
}

export default AllTagsTemplate

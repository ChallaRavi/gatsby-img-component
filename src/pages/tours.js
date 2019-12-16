import React from "react"
import Layout from "../components/layout"
import ToursLayout from "../components/Tours/tours.component"
import { graphql } from "gatsby"

export const tours = ({ data }) => {
  return (
    <Layout>
      <h2>Tours Page</h2>
      <ToursLayout toursData={data.tours.edges} />
    </Layout>
  )
}

export const getTourData = graphql`
  query {
    tours: allContentfulChalladata {
      edges {
        node {
          text
          price
          slug
          country
          id: contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default tours

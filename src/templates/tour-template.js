import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../css-modules/template.module.css"
import Image from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import { Link } from "gatsby"

const TourTemplate = ({ data }) => {
  const {
    text,
    price,
    country,
    days,
    start,
    images,
    journey,
    description,
  } = data.singleTour

  return (
    <Layout>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {images.map((item, index) => {
              return (
                <Image
                  key={index}
                  fluid={item.fluid}
                  alt={text}
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{text}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon}></FaMoneyBillWave>
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <ul className={styles.journey}>
            {journey.map((item, index) => {
              return <li key={index}>{item.day}</li>
            })}
          </ul>
          <Link to="/tours/">&larr;back to tours</Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    singleTour: contentfulChalladata(slug: { eq: $slug }) {
      text
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      journey {
        day
        info
      }
      description
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default TourTemplate

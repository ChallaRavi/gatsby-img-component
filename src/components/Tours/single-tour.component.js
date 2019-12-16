import React from "react"
import { FaMap } from "react-icons/fa"
import Image from 'gatsby-image'
import tourstyle from '../../css-modules/tour.module.css'
import { Link } from "gatsby"
import PropTypes from 'prop-types'

export const SingleTour = ({ tour }) => {
    console.log(tour)
  const { text, price, country, days, slug, images } = tour
  const mainImage = images[1].fluid;
  return (
    <article className={tourstyle.tour}>
      <div className={tourstyle.imgContainer}>
        <Image fluid={mainImage} className={tourstyle.img} alt={text} />
        <Link className={tourstyle.link} to={`/challadata/${slug}`}>
          details
        </Link>
      </div>
      <div className={tourstyle.footer}>
        <h3>{text}</h3>
        <div className={tourstyle.info}>
          <h4 className={tourstyle.country}>
            <FaMap className={tourstyle.icon}></FaMap>
            {country}
          </h4>
          <div className={tourstyle.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

SingleTour.propTypes = {
  tour: PropTypes.shape({
    text: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired
    
  }),
}
export default SingleTour

import React from "react"
import SingleTour from "./single-tour.component"
import styles from "../../css-modules/items.module.css"

export const ToursLayout = ({ toursData }) => {

  return (
    <section className={styles.tours}>
      <div className={styles.center}>
        {toursData.map(({ node }) => {
          return <SingleTour key={node.id} tour={node} />
        })}
      </div>
    </section>
  )
}

export default ToursLayout

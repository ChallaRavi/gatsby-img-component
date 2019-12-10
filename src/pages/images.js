import React from 'react'
import Layout from "../components/layout"
import cardwidth from '../css-modules/image.module.css'
import { Link } from "gatsby"


export const images = () => {
  return (
    <Layout>
      <h1>Image Component</h1>
      <em>This component will fetch data using Gatsby Image file system Plugin.</em>
    </Layout>
  )
}

export default images

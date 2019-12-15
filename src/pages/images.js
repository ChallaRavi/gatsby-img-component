import React from 'react'
import Layout from "../components/layout"
import cardwidth from '../css-modules/image.module.css'
import { Link } from "gatsby"
import ImageLayout from '../components/images.component'


export const images = () => {
  return (
    <Layout>
      <h1>Image Component</h1>      
      <ImageLayout />
    </Layout>
  )
}

export default images

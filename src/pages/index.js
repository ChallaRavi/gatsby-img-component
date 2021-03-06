import React from 'react';
import Layout from '../components/layout';
import { Link } from "gatsby"


export const index = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <p>This is my personal website.</p>
      <Link to="/about/">Goto About Page &rarr;</Link>
    </Layout>
  )
}

export default index

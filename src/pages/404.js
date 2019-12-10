import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const Error = () => {
  return (
    <Layout>
      <h1>No Such Page Exists</h1>
      <p>Plz use return <Link to = "/">Home &rarr;</Link> </p>
    </Layout>
  )
}

export default Error

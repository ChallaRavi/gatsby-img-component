import React from 'react';
import Layout from '../components/layout';
import blogstyle from '../css-modules/blog.module.css';

export const blog = () => {
  return (
    <Layout>
      <h3 className={blogstyle.title}>Blog</h3>
      <p>This will display All Posts from MDX</p>
   
    </Layout>
  )
}

export default blog

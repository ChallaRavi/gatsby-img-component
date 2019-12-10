import React from 'react'
import { Link } from 'gatsby';

export const navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog/">blog</Link>
          <li>
            <Link to="/products/">Products</Link>
          </li>
        </li>
      </ul>
    </nav>
  )
}

export default navbar;
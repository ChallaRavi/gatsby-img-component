import React from "react"
import { Global, css } from "@emotion/core"
import Helmet from "react-helmet"
import Header from "./header"

import useSiteMetadata from "../hooks/use-sitemetadata"
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  //using Global Styles: Which are common to all the Pages
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          /* * + * {
            margin-top: 1rem;
          } */
          html,
          body {
            margin: 0;
            color: #555;
            font-family: "Baskervville", "Segoe UI", "Roboto",
               "sans-serif", "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: 18px;
            line-height: 1.4;
            text-align: center;
            text-transform: capitalize;
            > div {
              margin-top: 0;
            }
          }
          *{
            margin: 0;
            box-sizing: border-box;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 2.1;
            text-transform: capitalize;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans';
            + * {
              margin-top: 0.5rem;
            }
          }
          strong {
            color: #222;
          }
          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto;
        `}
      >
        {children}
      </main>
    </>
  )
}

export default Layout

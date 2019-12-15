import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img3 from "../images/image-3.jpg"
import Image from "gatsby-image"

export const ImageLayout = () => {
  const { fixed, fluid } = useStaticQuery(getImages)
  return (
    <ImgWrapper>
      <article>
        <h4>Basic Image</h4>
        <img src={Img3} className="basic"></img>
      </article>
      <article>
        <h4>Fixed Image</h4>
        <Image fixed={fixed.childImageSharp.fixed} alt="technology" />
      </article>
      <article>
        <h4>Fluid Image</h4>
        <Image
          fluid={fluid.childImageSharp.fluid}
          alt="artificalIntellegence"
        />
      </article>
    </ImgWrapper>
  )
}

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-1.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const ImgWrapper = styled.section`
  width: 80vw;
  margin: 0 auto 10rem auto;
  .basic {
    width: 100%;
  }
  article {
    border: 1px solid #346a;
    padding: 1rem 0;
  }

  @media (min-width: 975px) {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    grid-column-gap: 3px;
  }
`

export default ImageLayout

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ayumi.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">
            HELLO,
            <br />
            I'M YURI
          </div>
          {/* <div className="main-image">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div> */}
        </div>
        <div className="scrollview">
          <div class="vl"></div>
          Scroll
        </div>
      </div>
      <a className="rightmsg" href="mailto: yuri0425@berkeley.edu">
        yuri0425@berkeley.edu
      </a>
    </div>
  )
}

export default Banner

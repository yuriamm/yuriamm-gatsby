import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      contactImg: file(relativePath: { eq: "yuriny.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="contact" className="contact">
      <div className="container">
        <h3>Contact Me</h3>
        <div className="contactImg">
          <Img fluid={data.contactImg.childImageSharp.fluid} />
        </div>
        <div className="content">
          I'm currently looking for new opportunities! Feel free to send me an
          email or find me on Twitter, LinkedIn, and Github.
        </div>
        <div className="socials">
          <a target="_blank" rel="noreferrer" href="/">
            <FontAwesomeIcon
              title={"Check out my github!"}
              className="github-logo"
              icon={faGithub}
              size="4x"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="/">
            <FontAwesomeIcon
              title={"Follow me on Twitter!"}
              className="twitter-logo"
              icon={faTwitter}
              size="4x"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="/">
            <FontAwesomeIcon
              title={"Connect me on LinkedIn!"}
              className="linkedIn-logo"
              icon={faLinkedin}
              size="4x"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Contact

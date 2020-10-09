import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImg: file(relativePath: { eq: "yuriny.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="inner-about">
          <div className="content">
            <h3>About me</h3>
            <p>
              My name is Yuri Amami. I am a software engineer based in Tokyo,
              Japan.
            </p>
            <p>
              I have developed multiple web applications and mobile applications
              in Javascript, Typescript, and Dart utilizing frameworks like
              React, Vue and Flutter as well. I am very passionate about
              learning technologies that I have never worked with and being able
              to quickly adapt to them.
            </p>
            <p>
              I am a trilingual in Chinese, Japanese and English where I grew up
              going back and forth between China, Japan, and the U.S. I have
              always enjoyed working in a diverse team.
            </p>
            <p>
              Strong: JavaScript, HTML/CSS, React-native, React.js, Vue.js,
              Node.js, Express, PostgresQL, MongoDB, Dart, Flutter, Hapi, Heroku
            </p>
            <p>Experience: Typescript, TypeORM, Python, TDD, Agile</p>
            <div className="resume">
              <a href={"/yuriamami-resume.pdf"}>View Resume</a>
            </div>
          </div>
          <div className="img">
            <div className="profileImg">
              <Img fluid={data.profileImg.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="black-box" />
      </div>
    </div>
  )
}

export default About

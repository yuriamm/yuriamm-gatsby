import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { frontmatter: { tag: { eq: "project" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              youtube
              date
            }
            html
          }
        }
      }
    }
  `)
  const nodes = data.projects.edges

  return (
    <div id="projects" className="projects">
      <div className="container">
        <h3>Projects</h3>
        <div className="content">
          {nodes.map(({ node }, i) => {
            const { frontmatter, html } = node
            const { github, title, tech, youtube } = frontmatter
            return (
              <div className="inner" key={i}>
                <div className="project-title">{title}</div>
                <div
                  className="project-description"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <div className="logo">
                  <a target="_blank" rel="noreferrer" href={github}>
                    <FontAwesomeIcon
                      className="github-logo"
                      icon={faGithub}
                      size="3x"
                    />
                  </a>
                  <a target="_blank" rel="noreferrer" href={youtube}>
                    <FontAwesomeIcon
                      className="youtube-logo"
                      icon={faYoutube}
                      size="3x"
                    />
                  </a>
                </div>
                <footer>
                  <ul className="project-tech-list">
                    {tech.map(({ tech }, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            )
          })}
        </div>
        <div className="extra-text">More projects coming soon ...</div>
      </div>
    </div>
  )
}

export default Projects

import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">
              <span className="letter-y">Y</span>URI
            </Link>
          </div>
          <div className="navigation">
            <nav>
              <Link to="/#about">About</Link>
              <Link to="/#projects">Projects</Link>
              <Link to="/#contact">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

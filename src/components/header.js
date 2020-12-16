import React from 'react'
import './Header.css'
import Link from 'gatsby-link'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <svg
          width="100%"
          height="115"
          viewBox="0 0 100% 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="white">
            <animate
              repeatCount="indefinite"
              fill="freeze"
              attributeName="d"
              dur="10s"
              values="
              M1298 1C1298 33.5848 992.658 87 616 87C239.342 87 -66 33.5848 -66 1C-66 -31.5848 239.342 -58 616 -58C992.658 -58 1298 -31.5848 1298 1Z;

              M1298 1C1298 33.5848 820.158 115 443.5 115C66.8418 115 -66 33.5848 -66 1C-66 -31.5848 239.342 -58 616 -58C992.658 -58 1298 -31.5848 1298 1Z;
              
              M1298 1C1298 33.5848 437.658 80.5 61 80.5C-315.658 80.5 -65.9999 33.5848 -65.9999 1C-65.9999 -31.5848 239.342 -58 616 -58C992.658 -58 1298 -31.5848 1298 1Z;

              M1298 1C1298 33.5848 992.658 87 616 87C239.342 87 -66 33.5848 -66 1C-66 -31.5848 239.342 -58 616 -58C992.658 -58 1298 -31.5848 1298 1Z;
              "
            />
          </path>
        </svg>
        <div className="menu-btn">
          <div className="menu-btn_burger"></div>
        </div>
        <div className="HeaderGroup">
          <div className="Logo">
            {' '}
            <Link to="/">
              {' '}
              <h3>Adam Lempel</h3>
            </Link>
          </div>
          <div className="NavItems">
            <Link to="/projects" smooth=".2">
              Projects
            </Link>
            <Link to="/about">About</Link>
            <Link to="/Contact">
              <button>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header

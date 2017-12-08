import React from 'react'
import SocialButton from '../Buttons/SocialButton'

const Navbar = () => (
  <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand">LeanJS</a>
      </div>
      <ul className="nav navbar-nav pull-right">
        <li className="hidden-xs">
          <a href="#about">About the library</a>
        </li>
        <li>
            <ul className="list-inline" style={{padding: '15px 0'}}>
                <li>
                    <SocialButton to="https://github.com//leanjscom" icon="github" size={30} />
                </li>
                <li>
                    <SocialButton to="https://twitter.com/leanjscom" icon="twitter" size={30} />
                </li>
                <li>
                    <SocialButton to="https://www.instagram.com/leanjscom" icon="instagram" size={30} />
                </li>
            </ul>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar

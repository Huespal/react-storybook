import React from 'react'
// styled components have been imported for you already
import styled from 'styled-components'

// create styled-component called Button with styles of .btn-social and .btn-outline classes
// you can find those classes in the stylesheet in public/css/main.css

const SocialButton = ({ to, icon, target = "_blank" }) => (
  <a
    target={target}
    href={to}
    className="btn-social btn-outline"
  >
    <i className={`fa fa-fw fa-${icon}`}></i>
  </a>
)

export default SocialButton

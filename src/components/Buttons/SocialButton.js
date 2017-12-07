import React from 'react'
// styled components have been imported for you already
import styled from 'styled-components'

// create styled-component called Button with styles of .btn-social and .btn-outline classes
// you can find those classes in the stylesheet in public/css/main.css

const Button = styled.a`
  display: inline-block;
  height: ${props => props.outline ? props.size : props.size/2}px;
  width: ${props => props.outline ? props.size : props.size/2}px;
  border-radius: 100%;
  text-align: center;
  line-height: 45px;  
  color: white;
  font-size: ${props => props.size / 2}px;
  border: ${props => props.outline ? 'solid 2px white' : 0};
  background: transparent;
  transition: all 0.3s ease-in-out;
  &:hover, &:focus, &:active {
    color: #774EBD;
    background: ${props => props.outline ? 'white' : 'transparent'};
    //border: solid 2px white;
  }
`

const SocialButton = ({ to, icon, target = "_blank", size = 50, outline }) => (
  <Button
    target={target}
    href={to}
    size={size}
    outline={!!outline}
  >
    <i className={`fa fa-fw fa-${icon}`}></i>
  </Button>
)

export default SocialButton

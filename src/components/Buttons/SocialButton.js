import React from 'react'
import FontAwesome from 'react-fontawesome';
// styled components have been imported for you already
import styled from 'styled-components'

// create styled-component called Button with styles of .btn-social and .btn-outline classes
// you can find those classes in the stylesheet in public/css/main.css

const Button = styled.a`
  position: relative;
  display: inline-block;
  height: ${props => props.outline ? props.size : props.size/2}px;
  width: ${props => props.outline ? props.size : props.size/2}px;
  border-radius: 100%;
  text-align: center;
  color: ${props => props.color};
  font-size: ${props => props.size / 2}px;
  border: ${props => props.outline ? `solid 2px ${props.color}` : 0};
  background: transparent;
  transition: all 0.3s ease-in-out;
  &:hover, &:focus, &:active {
    color: #774EBD;
    background: ${props => props.outline ? props.color : 'transparent'};
  }
  & > i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
  }
`

const SocialButton = ({ to, icon, target = "_blank", size = 50, outline, colour = 'white' }) => (
  <Button
    target={target}
    href={to}
    size={size}
    color={colour}
    outline={!!outline}
  >
    <i className={`fa fa-fw fa-${icon}`}></i>
  </Button>
)

export default SocialButton

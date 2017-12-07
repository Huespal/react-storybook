import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import styled from 'styled-components'

const StoryWrapper = styled.div`
  //additional styling for stories to make it look prettier - eg. center them or whatever 
`

const Wrapper = story => (
    <StoryWrapper>
        {story()}
    </StoryWrapper>
)

addDecorator(Wrapper)
addDecorator(withKnobs)

// load stories dynamically
const req = require.context('../src', true, /\.stories\.js$/)

function loadStories () {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

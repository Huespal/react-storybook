import React from 'react';

import { storiesOf } from '@storybook/react'
import { text, boolean, number } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

import '../../../public/css/font-awesome.min.css'


// create story of your SocialButton component
// you can find some example stories in the Storybook demo file in src/stories/index.js

import SocialButton from './SocialButton'

const stories = storiesOf('Social Button', module)

stories.add('default', withInfo()(() =>
    <SocialButton
        to={'http://www.twitter.com'}
        icon={text('Icon', 'twitter')}
        size={number('Size',80)}
        colour={text('Colour','black')}
        outline={boolean('Outline', false)}
    />))

stories.add('with outline', withInfo()(() =>
    <SocialButton
        icon={text('Icon', 'twitter')}
        size={number('Size',80)}
        colour={text('Colour','black')}
        outline
    />))
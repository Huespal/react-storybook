import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../../../public/css/font-awesome.min.css'


// create story of your SocialButton component
// you can find some example stories in the Storybook demo file in src/stories/index.js

import SocialButton from './SocialButton'

const stories = storiesOf('Social Button', module)

stories.add('default', () => <SocialButton to={'http://www.twitter.com'} icon={'twitter'} size={30} colour={'black'} />)
stories.add('with outline', () => <SocialButton icon={'facebook'} outline />)
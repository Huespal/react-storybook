import React from 'react';
// Storybook with a few addons have been imported for you already
import { storiesOf } from '@storybook/react'
import { text, boolean, number } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import SocialButton from './SocialButton'

import '../../../public/css/font-awesome.min.css'

// create story of your SocialButton component
// have a look in the DemoButton.stories.js file for an example

storiesOf('SocialButton', module)
    .add('with outline', () => <SocialButton outline to="https://github.com//leanjscom" icon="github" />)
    .add('without outline', () => <SocialButton to="https://github.com//leanjscom" icon="github" />);

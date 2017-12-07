## Styling in React
The goal of this exercise it to learn styled-components and Storybook.

## Requirements
You need to be comfortable writing ES6 JavaScript and CSS.
You need to have `node` and `npm` or `yarn` installed on your computer.

## Getting started
you can either copy & paste this to your terminal

- `git clone https://github.com/leanjscom/styling-in-react.git && cd styling-in-react && yarn install && yarn start`

or take the step by step route
- `git clone https://github.com/leanjscom/styling-in-react.git`
- `cd styling-in-react`
- `yarn install`
- `yarn start`

open the browser with the url `http://localhost:3000` and you will be ready to start

## Exercise

#### styled-components

1. Refactor styles of src/components/Buttons/SocialButton.js component into styled-components
2. We use `SocialButton` component in the `Navbar` at the top as well as in the `Footer` at the bottom however we would like to have different styling for each. Using template literals you can create a function within the styled-component and conditionally render different styles based on passed props.
We would like to have icons with no outline in the Navbar and icons with outline in the Footer.
3. We would like the SocialButtons in the `Navbar` be a little smaller than the ones in the `Footer` - pass the size of the button as a prop to your component.
4. As you can see the Navbar has a lot o different classes, refactor Navbar into styled-components because those classes should not be used anywhere anyway.


#### Storybook

1.

#### Bonus

1.

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).

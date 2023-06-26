# Big Commerce

Template for Step-Flow UX pattern product checkout experience.

## Features

- 🔥 [React.js](https://react.dev/) 
- 🎨 Integrated with [Tailwind CSS](https://tailwindcss.com)
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✏️ Linter with [ESLint](https://eslint.org)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🗂 VSCode configuration: ESLint, Prettier, TypeScript

## Steps
- Display a list of selectable products rendered from an API [you may simulate the api loading however you want].
  
  a. Multi selection of products must be allowed

  b. Continue button to confirm selection

- On “Continue” from the previous page, render a page to fetch the address
[billing/shipping address] of the customer.
-  On “Continue” from the previous page, render a page to display the final price including
discount.
- On Submit,
 
  a. If the API call is successful, display a confirmation of the success.

  b. If the API call fails, then display an error message to illustrate.

## Points to be taken care of

- You must not use multiple URL routes for the page, the entire experience should be in one-page
- It must be possible to go back and forth between any step and the previously saved data
must be available pre-filled/selected.
- You may use any version of react and any library of your choosing.
- It will be a bonus if you provide aesthetic styling to the page.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

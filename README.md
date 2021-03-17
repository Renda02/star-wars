# Star Wars
This a webapp which displays characters within the The Star Wars universe which I used [SWAPI: The Stars Wars API](https://swapi.dev/) to fetch the data required.


## Details of the app

* To create the app I implemented React app as main ui.
* To fetch data required for the webapp I used React hooks `{useState, useEffect } ` following [React documentation](https://reactjs.org/docs/hooks-reference.html#useeffect) .
* I then `props` to pass the data through the components and `map()` to build new element.
* To navigate to character from inside the component I used  `{React Router}`using [react-router-dom]() depedency and I also used `{useParams}` to match and diplay character details.
* To add icon I used [React Icons](https://react-icons.github.io/react-icons/) dependency.
*  To make the components readadle and to keep my styling in control I added [styled components](https://styled-components.com/) dependency.

## Things to do

* Improving the styling



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**


# StarWars.ly

StarWars.ly is a React application for exploring the people, planets, and films of the Star Wars franchise. This application utilizes various libraries and features, including React, Redux, Router, and Axios, along with the Star Wars API for fetching data.

## setup 

The application consists of several components:

- App: The main component that sets up the application.
- NavBar: The navigation bar for easy navigation between different sections.
- Routes: Sets up the routes for the application, directing users to specific components based on the URL.
- Film, FilmList: Components for displaying information about films and rendering a list of films.
- HomePage: Represents the home page, allowing users to reset exploration or start with the first film.
- Person, PersonList: Components for displaying information about characters/people and rendering a list of characters.
- Planet, PlanetList: Components for displaying information about planets and rendering a list of planets.
- Sublist, ItemList: Reusable components for rendering sublists and lists of items.

The application's Redux store maintains the following structure:

{
films: {
// Film objects
},
planets: {
// Planet objects
},
people: {
// People objects
},
}

## Libraries Used

- React
- Redux
- React Router
- Axios
- Redux Persist

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## How the App Works 
Initial Load: When a user navigates to a part of the application that lists films, planets, or people (e.g., clicking on "start with new hope"), the application attempts to render lists of these entities. Initially, detailed data for these entities might not be present in the Redux store, as they are fetched asynchronously from the Star Wars API.

Displaying Unknown: The components (Person.js, Planet.js) initially display entities as "Unknown" because the detailed information for each entity is not immediately available until the specific API call completes. This "Unknown" state is a placeholder while the application fetches the data.

Fetching Data: When a user clicks on a specific item (e.g., a character or a planet) for the first time, the application dispatches an action to fetch detailed data for that item from the Star Wars API using the getPersonFromAPI, getPlanetFromAPI, or getFilmFromAPI functions.

Updating State: Once the data is fetched, it is stored in the Redux store under the relevant reducer (people, planets, films). The application then updates the UI with the fetched data, replacing "Unknown" with the actual names and details.

Subsequent Clicks: After the initial fetch and state update, clicking on the same link again will not display "Unknown". Since the data is already in the Redux store, the application can immediately display the detailed information without needing to fetch it again.



### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
  used to extract the ID from the URL. It is used to match and capture the numerical portion of the URL, which represents the ID of the specific resource being fetched. This ID is then used to identify and update the relevant data in the Redux store.

- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?
  The Redux store is persisted using the redux-persist library. This library allows the Redux store to be saved to the browser's localStorage or sessionStorage. It achieves this persistence by serializing and deserializing the state, enabling the state to be stored locally and retrieved when the app is reloaded or revisited.

- What does `combineReducers` do? Why are we using it? 
combineReducers in Redux is used to combine multiple reducers into a single root reducer. It helps manage different aspects of the application state separately and allows for modularization of the reducers. By using combineReducers, each reducer can handle a specific slice of the application state, making the overall state management more organized and maintainable.

- How does the "Reset to Fresh Exploration" feature work?
The "Reset to Fresh Exploration" feature works by dispatching an action that resets all the data in the Redux store to its initial state. This action is triggered when the user clicks the "Reset to Fresh Exploration" button on the homepage. It clears all the previously fetched data, allowing the user to start exploring the topics from the beginning.

- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?
FilmList.js, PlanetList.js, and PersonList.js are simple components that use an ItemList to maintain a consistent and modular design. By abstracting the list rendering logic into the ItemList component, it promotes code reusability and makes it easier to manage and display different types of lists with similar structures. This design approach reduces code duplication and ensures a consistent UI across different list components.


- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?
  Using the useSelector hook to save only a single fact, such as whether the first film is loaded, is better than selecting all the films and checking the loaded status in the render function. By selecting only the necessary data, unnecessary re-renders are avoided, leading to improved performance. If all the films were selected, it could potentially cause unnecessary re-renders and impact the overall performance of the application, especially when dealing with a large dataset.

- What good ideas for designing and organizing React apps have you learned from
  studying this code?
  the use of Redux for managing the application state, modularization of components, separation of concerns, efficient data fetching from external APIs, and proper use of React hooks for state management and data retrieval

- Which Star Wars character would make the best React developer, and why?
Yoda would make the best React developer because of his wisdom and deep understanding of the Force, which is akin to the knowledge required for developing complex apps. Yoda's attention to detail, problem-solving skills, and ability to foresee issues before they arise would make him an excellent troubleshooter. 

- redux store:
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
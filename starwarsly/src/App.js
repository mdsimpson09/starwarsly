/**
 * This is the main App component that initializes the React app and sets up the routes and navigation bar.
 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';

import NavBar from "./NavBar";
import Routesa from "./Routes";


function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <NavBar />
        <Routesa />
      </BrowserRouter>
    </div>
  );
}


export default App;

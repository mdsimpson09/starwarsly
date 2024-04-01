/**
 * This component sets up the routes for the application, directing the user to the appropriate component based on the URL.
 */
import React from "react";
import { Switch, Routes, Route, NavLink } from "react-router-dom";
import FilmList from "./FilmList";
import Film from "./Film";
import PersonList from "./PersonList";
import PlanetList from "./PlanetList";
import Planet from "./Planet";
import Person from "./Person";
import HomePage from "./HomePage";

function Routesa() {
  return (
    // <Routes> 
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/films" element={<FilmList />} />
    //   <Route path="/films/:id" element={<Film />} />  
    //   <Route path="/people" element={<PersonList />} />
    //   <Route path="/people/:id" element={<Person />} />
    //   <Route path="planets" element={<PlanetList />} />
    //   <Route path="/planets/:id" element={<Planet />} />
    // </Routes>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/films">
        <FilmList />
      </Route>
      <Route exact path="/films/:id">
        <Film />
      </Route>
      <Route exact path="/planets">
        <PlanetList />
      </Route>
      <Route exact path="/planets/:id">
        <Planet />
      </Route>
      <Route exact path="/people">
        <PersonList />
      </Route>
      <Route exact path="/people/:id">
        <Person />
      </Route>
    </Switch>
  );
}


export default Routesa;

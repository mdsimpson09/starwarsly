/**
 * This component represents a sublist within a detailed view, such as the list of characters or films associated with a planet or person.
 */
import React from 'react';
import { Link } from "react-router-dom";


function Sublist({title, items}) {
  return (
    <>
      <h3>{ title }</h3>
      <ul>
        {items.map(item =>
          <li key={item.id}><Link to={item.url}>{item.display}</Link></li>
        )}
      </ul>
    </>
  );
}

export default Sublist;
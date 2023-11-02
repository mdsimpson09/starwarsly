/**
 * This component is responsible for rendering detailed information about a particular character/person from the Star Wars franchise.
 */
import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from './ItemList'

function PersonList() {
  const items = useSelector(st => Object.values(st.people).map(
    p => ({...p, url: `/people/${p.id}`})
  ));
  return <ItemList title="People" items={items} />;
}

export default PersonList;
// Person.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from 'redux';
import rootReducer from './reducers/root';
import Person from './Person';

// Mock Redux store
const store = configureStore(rootReducer);

describe('Person Component', () => {
  test('renders person details correctly', () => {
    const mockPerson = {
      id: 1,
      name: 'Luke Skywalker',
      gender: 'male',
      birthYear: '19BBY',
      homeworld: 'Tatooine',
      films: [],
    };

    render(
      <Provider store={store}>
        <Person />
      </Provider>
    );

    // Check if person details are rendered
    expect(screen.getByText(mockPerson.name)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.gender)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.birthYear)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.homeworld)).toBeInTheDocument();
  });

  test('renders loading message when person data is missing', () => {
    render(
      <Provider store={store}>
        <Person />
      </Provider>
    );

    // Check if loading message is rendered
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
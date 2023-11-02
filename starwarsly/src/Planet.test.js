// Planet.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from 'redux';
import rootReducer from './reducers/root';
import Planet from './Planet';

// Mock Redux store
const store = configureStore(rootReducer);

describe('Planet Component', () => {
  test('renders planet details correctly', () => {
    const mockPlanet = {
      id: 1,
      name: 'Tatooine',
      climate: 'Arid',
      population: '200000',
      residents: [],
      films: [],
    };

    render(
      <Provider store={store}>
        <Planet />
      </Provider>
    );

    // Check if planet details are rendered
    expect(screen.getByText(mockPlanet.name)).toBeInTheDocument();
    expect(screen.getByText(mockPlanet.climate)).toBeInTheDocument();
    expect(screen.getByText(mockPlanet.population)).toBeInTheDocument();
  });

  test('renders loading message when planet data is missing', () => {
    render(
      <Provider store={store}>
        <Planet />
      </Provider>
    );

    // Check if loading message is rendered
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
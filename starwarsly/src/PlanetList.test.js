// PlanetList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from 'redux';
import rootReducer from './reducers/root';
import PlanetList from './PlanetList';

// Mock Redux store
const store = configureStore(rootReducer);

describe('PlanetList Component', () => {
  test('renders list of planets correctly', () => {
    const mockPlanets = [
      { id: 1, name: 'Tatooine' },
      { id: 2, name: 'Alderaan' },
      { id: 3, name: 'Naboo' },
    ];

    render(
      <Provider store={store}>
        <PlanetList />
      </Provider>
    );

    // Check if planet names are rendered
    mockPlanets.forEach((planet) => {
      expect(screen.getByText(planet.name)).toBeInTheDocument();
    });
  });

  test('renders no planets message when planet list is empty', () => {
    render(
      <Provider store={store}>
        <PlanetList />
      </Provider>
    );

    // Check if no planets message is rendered
    expect(screen.getByText(/You haven't explored any planets yet./i)).toBeInTheDocument();
  });
});
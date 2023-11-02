// Film.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from 'redux';
import rootReducer from './reducers/root';
import Film from './Film';

// Mock Redux store
const store = configureStore(rootReducer);

describe('Film Component', () => {
  test('renders film details correctly', () => {
    const mockFilm = {
      id: 1,
      name: 'A New Hope',
      openingCrawl: 'It is a period of civil war...',
      director: 'George Lucas',
      planets: [],
      characters: [],
    };

    render(
      <Provider store={store}>
        <Film />
      </Provider>
    );

    // Check if film details are rendered
    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.director)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.openingCrawl)).toBeInTheDocument();
  });

  test('renders loading message when film data is missing', () => {
    render(
      <Provider store={store}>
        <Film />
      </Provider>
    );

    // Check if loading message is rendered
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
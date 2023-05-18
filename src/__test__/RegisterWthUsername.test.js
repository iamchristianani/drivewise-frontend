import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LoginWithUsername from '../components/LoginWithUsername';

jest.mock('../redux/registerByUSername', () => ({
  registerByUsername: jest.fn(),
}));

const mockStore = configureStore([thunk]);

describe('RegisterWithUsername', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      username: null,
      isLoading: false,
      isAuthenticated: false,
      error: null,
    });
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <LoginWithUsername />
      </Provider>,
    );
  });

  test('renders the form fields', () => {
    expect(screen.getByLabelText(/Username:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });
});

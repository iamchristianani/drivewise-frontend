import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import MyReservation from '../pages/MyReservation';

describe('Home Test', () => {
  test('to render all car tests reservations: ', () => {
    const home = render(
      <Provider store={store}>
        <BrowserRouter>
          <MyReservation />
        </BrowserRouter>
      </Provider>,
    );
    expect(home).toMatchSnapshot();
  });
});

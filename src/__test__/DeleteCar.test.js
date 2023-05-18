import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import DeleteCar from '../pages/DeleteCar';

describe('Home Test', () => {
  test('to render all cars and a delete button: ', () => {
    const home = render(
      <Provider store={store}>
        <BrowserRouter>
          <DeleteCar />
        </BrowserRouter>
      </Provider>,
    );
    expect(home).toMatchSnapshot();
  });
});

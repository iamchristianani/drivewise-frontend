import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Details from '../pages/Details';

describe('Home Test', () => {
  test('to render each car details: ', () => {
    const home = render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>,
    );
    expect(home).toMatchSnapshot();
  });
});

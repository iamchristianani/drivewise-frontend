import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CarsCard from '../components/Cars/CarsCard';

describe('Each Car Card Test', () => {
  test('to test the onClick event: ', () => {
    const clickCar = jest.fn();
    const id = '2';
    const model = 'Model S';
    const make = 'Tesla';
    const description = 'The Tesla Model S is a high-performance electric sedan that offers blistering acceleration, advanced technology, and long-range driving capabilities.';
    const image = 'https://c8.alamy.com/comp/2AF282K/mclaren-650-street-or-racing-car-this-car-run-a-race-track-2AF282K.jpg';

    const { queryByTitle } = render(
      <CarsCard
        key={id}
        id={id}
        model={model}
        make={make}
        description={description}
        image={image}
        clickCar={clickCar}
      />,
    );
    const carDetailsButton = queryByTitle('carDetailsButton');
    fireEvent.click(carDetailsButton);
    expect(clickCar).toHaveBeenCalledTimes(1);
  });
});

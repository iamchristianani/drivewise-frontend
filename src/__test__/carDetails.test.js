import detailsReducer from '../redux/cars/carDetails';

describe('detailsReducer', () => {
  test('should return the initial state', () => {
    expect(detailsReducer(undefined, {})).toEqual([]);
  });

  test('should handle GET_CAR_DETAILS', () => {
    const stateBefore = [];
    const GET_CAR_DETAILS = 'drivewise_frontend/cars/GET_CAR_DETAILS';

    const details = {
      id: 1,
      make: 'Toyota',
      model: 'Corolla',
      year: 2019,
      image: 'https://i.ibb.co/0j3h3JX/2019-Toyota-Corolla.jpg',
      color: 'White',
      price: 100,
      description: 'A very nice car',
    };

    const action = {
      type: GET_CAR_DETAILS,
      payload: details,
    };

    const stateAfter = {
      id: 1,
      make: 'Toyota',
      model: 'Corolla',
      year: 2019,
      image: 'https://i.ibb.co/0j3h3JX/2019-Toyota-Corolla.jpg',
      color: 'White',
      price: 100,
      description: 'A very nice car',
    };

    expect(detailsReducer(stateBefore, action)).toEqual(stateAfter);
  });
});

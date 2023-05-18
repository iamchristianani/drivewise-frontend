import reservationsReducer from '../redux/reservations/reservations';

describe('reservationsReducer', () => {
  test('should return the initial state', () => {
    expect(reservationsReducer(undefined, {})).toEqual([]);
  });

  test('should handle GET_RESERVATIONS', () => {
    const stateBefore = [];
    const GET_RESERVATIONS = 'drivewise_frontend/reservations/GET_RESERVATIONS';

    const reservation = {
      id: 1,
      user_id: 1,
      car_id: 1,
      year: 2019,
      reservation_date: '2023-05-08',
      city: 'Nairobi',
    };

    const action = {
      type: GET_RESERVATIONS,
      payload: reservation,
    };

    const stateAfter = {
      id: 1,
      user_id: 1,
      car_id: 1,
      year: 2019,
      reservation_date: '2023-05-08',
      city: 'Nairobi',
    };

    expect(reservationsReducer(stateBefore, action)).toEqual(stateAfter);
  });
});

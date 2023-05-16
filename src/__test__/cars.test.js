import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchCars } from '../redux/cars/cars';
import carsData from '../DumyData/cars.json';

const mockStore = configureMockStore([thunk]);

describe('fetchCars', () => {
  test('should fetch cars and update the state', () => {
    const initialState = {
      loading: false,
      cars: [],
      error: '',
    };

    const store = mockStore(initialState);

    return store.dispatch(fetchCars()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toBe('drivewise_frontend/cars/GET_CARS/pending');
      expect(actions[1].type).toBe('drivewise_frontend/cars/GET_CARS/fulfilled');
      expect(actions[1].payload).toEqual(carsData);
    });
  });
});

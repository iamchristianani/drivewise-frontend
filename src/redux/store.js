import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import carsReducer from './cars/cars';
import detailsReducer from './cars/carDetails';
import reservationsReducer from './reservations/reservations';
import authSlice from './loginByUsername';

const store = configureStore(
  {
    reducer: {
      authentications: authSlice,
      cars: carsReducer,
      details: detailsReducer,
      reservations: reservationsReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;

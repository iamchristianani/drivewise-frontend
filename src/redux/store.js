import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './authSlice';
import carsReducer from './cars/cars';
import detailsReducer from './cars/carDetails';

const store = configureStore(
  {
    reducer: {
      authentications: authReducer,
      cars: carsReducer,
      details: detailsReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;

import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './authSlice';
import carsReducer from './cars/cars';

const store = configureStore(
  {
    reducer: {
      authentications: authReducer,
      cars: carsReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;

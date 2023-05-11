import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_CAR_DETAILS } from '../actionTypes';
import Cars from '../../DumyData/cars.json';

const getDetailsAction = createAsyncThunk(
  GET_CAR_DETAILS,
  async (id, { dispatch }) => {
    const car = Cars.find((car) => car.id === Number(id));
    dispatch({
      type: GET_CAR_DETAILS,
      payload: car,
    });
  },
);

const detailsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_CAR_DETAILS:
      return action.payload;
    default: return state;
  }
};

export { getDetailsAction };
export default detailsReducer;

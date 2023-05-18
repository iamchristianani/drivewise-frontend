import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_CAR_DETAILS } from '../actionTypes';

const URL = 'https://drivewise.up.railway.app/api/v1/cars/';

const getDetailsAction = createAsyncThunk(
  GET_CAR_DETAILS,
  async (id, { dispatch }) => {
    const response = await fetch(`${URL}${id}`);
    const data = await response.json();
    dispatch({
      type: GET_CAR_DETAILS,
      payload: data,
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

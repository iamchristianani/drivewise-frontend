import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_RESERVATIONS } from '../actionTypes';

const URL = 'https://drivewise.up.railway.app/api/v1/users/';

const getReservationsAction = createAsyncThunk(
  GET_RESERVATIONS,
  async (id, { dispatch }) => {
    const response = await fetch(`${URL}/${id}/reservations`);
    const data = await response.json();
    dispatch({
      type: GET_RESERVATIONS,
      payload: data,
    });
  },
);

const reservationsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    default: return state;
  }
};

export { getReservationsAction };
export default reservationsReducer;

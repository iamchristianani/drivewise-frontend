import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_RESERVATIONS } from '../actionTypes';
import Reservations from '../../DumyData/reservations.json';
import Users from '../../DumyData/users.json';

const currentUser = Users.find((user) => user.id === 2);

const getReservationsAction = createAsyncThunk(
  GET_RESERVATIONS,
  async (id, { dispatch }) => {
    const reservations = Reservations.filter(
      (reservation) => reservation.user_id === currentUser.id,
    );
    dispatch({
      type: GET_RESERVATIONS,
      payload: reservations,
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

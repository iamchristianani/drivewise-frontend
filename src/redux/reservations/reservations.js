import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_RESERVATIONS } from '../actionTypes';
// import Reservations from '../../DumyData/reservations.json';
// import Users from '../../DumyData/users.json';

// const currentUser = Users.find((user) => user.id === 2);

const URL = 'http://localhost:3001/api/v1/users/2/reservations';
// const getReservationsAction = createAsyncThunk(
//   GET_RESERVATIONS,
//   async (id, { dispatch }) => {
//     const reservations = Reservations.filter(
//       (reservation) => reservation.user_id === currentUser.id,
//     );
//     dispatch({
//       type: GET_RESERVATIONS,
//       payload: reservations,
//     });
//   },
// );

const getReservationsAction = createAsyncThunk(
  GET_RESERVATIONS,
  async (id, { dispatch }) => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
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

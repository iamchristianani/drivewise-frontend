import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import users from '../DumyData/users.json';

export const USER_STORAGE_KEY = 'user';

const initialState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    dataRequest: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      console.log(action);
      console.log(action.payload);
      state.user = action.payload;
      state.isLoading = false;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(state.user));
    },
    authFailure: (state, action) => {
      state.user = null;
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
      localStorage.removeItem(USER_STORAGE_KEY);
    },
    signupSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(state.user));
    },
  },
});

export const login = (email, password) => async (dispatch) => {
  dispatch(authSlice.actions.dataRequest());
  // this comment is for geting data fron the database
  // try {
  //   const response = await axios.post('/api/login', { email, password });
  //   dispatch(authSlice.actions.loginSuccess(response.data));
  // } catch (error) {
  //   dispatch(authSlice.actions.authFailure(error.message));
  // }

  // this for geting data from the DumyData/users
  for (let i = 0; i < users.length; i += 1) {
    if (users[i].email === email && users[i].password === password) {
      console.log(users[i]);
      const payload = users[i].data;
      dispatch(authSlice.actions.loginSuccess(payload));
      return;
    }
  }
  dispatch(authSlice.actions.authFailure('user not found'));
};

export const signup = (name, email, password) => async (dispatch) => {
  dispatch(authSlice.actions.dataRequest());
  // this comment is for geting data fron the database
  // try {
  //   const response = await axios.post('/api/signup', {
  //     name, email, password, confirmPassword,
  //   });
  //   dispatch(authSlice.actions.signupSuccess(response.data));
  // } catch (error) {
  //   dispatch(authSlice.actions.authFailure(error.message));
  // }
  const obj = {
    email, name, password, created_at: '2023-05-06T00:50:27.136Z', updated_at: '2023-05-06T00:50:27.136Z',
  };
  users.push(obj);
  dispatch(authSlice.actions.signupSuccess(obj));
};
export default authSlice.reducer;

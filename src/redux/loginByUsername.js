/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const USER_STORAGE_KEY = 'user';

const URL = 'https://drivewise.up.railway.app/api/v1/users';
const initialState = {
  user: null,
  username: null,
  isLoading: true,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    dataRequest: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.username = action.payload.username;
      state.user = action.payload;
      state.isLoading = false;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(state.username));
    },
    signoutSuccess: (state) => {
      state.username = null;
      state.user = null;
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem(USER_STORAGE_KEY);
    },
    authFailure: (state, action) => {
      console.log(action.payload);
      state.username = null;
      state.user = null;
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
  },
});

export const loginByUsername = (username) => async (dispatch) => {
  dispatch(authSlice.actions.dataRequest());
  try {
    const response = await fetch(`${URL}/${username}`);
    const data = await response.json();
    console.log(data);
    dispatch(authSlice.actions.loginSuccess(data));
  } catch (error) {
    dispatch(authSlice.actions.authFailure(error.message));
  }
};

export const signupByUsername = (username) => async (dispatch) => {
  dispatch(authSlice.actions.dataRequest());
  console.log(username);
  try {
    const newUser = await axios.post(URL, { username });

    if (!newUser.ok) {
      throw new Error('Signup Failed');
    }
    const response = await fetch(`${URL}/${username}`);
    const data = await response.json();
    dispatch(authSlice.actions.loginSuccess(data));
  } catch (error) {
    dispatch(authSlice.actions.authFailure(error.message));
  }
};
export const signoutByUsername = () => async (dispatch) => {
  dispatch(authSlice.actions.dataRequest());
  localStorage.removeItem(USER_STORAGE_KEY);
  dispatch(authSlice.actions.signoutSuccess());
};

export default authSlice.reducer;

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const USER_STORAGE_KEY = 'user';

const initialState = {
  username: null,
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
      state.username = action.payload.username;
      state.isLoading = false;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(state));
    },
    authFailure: (state, action) => {
      state.username = null;
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
      localStorage.removeItem(USER_STORAGE_KEY);
    },
  },
});

export const registerByUsername = (username) => async (dispatch) => {
  dispatch(authSlice.actions.dataRequest());
  try {
    const response = await fetch(`http://localhost:3001/api/v1/users/${username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Registration Failed');
    }
    const data = await response.json();
    console.log(data);
    dispatch(authSlice.actions.loginSuccess(data));
  } catch (error) {
    dispatch(authSlice.actions.authFailure(error.message));
  }
};

export default authSlice.reducer;

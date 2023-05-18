import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_CARS, REMOVE_CAR } from '../actionTypes';

const initialState = {
  loading: false,
  cars: [],
  error: '',
};

const URL = 'https://drivewise.up.railway.app/api/v1/cars';
const fetchCars = createAsyncThunk(GET_CARS, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});
const removeCarAction = createAsyncThunk(
  REMOVE_CAR,
  async (id) => {
    await axios.delete(`${URL}/${id}`);
    const response = await fetch(`${URL}`);
    const data = await response.json();
    return data;
  },
);
const carSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchCars.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      cars: action.payload,
      error: '',
    }));
    builder.addCase(fetchCars.rejected, (state, action) => ({
      ...state,
      loading: false,
      cars: [],
      error: action.error.message,
    }));
    builder.addCase(removeCarAction.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      cars: action.payload,
      error: '',
    }));
  },
});
export { fetchCars, removeCarAction };
export default carSlice.reducer;

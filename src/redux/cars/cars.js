import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { GET_CARS } from '../actionTypes';
import Cars from '../../DumyData/cars.json';

const initialState = {
  loading: false,
  cars: [],
  error: '',
};

export const fetchCars = createAsyncThunk(GET_CARS, () => Cars);
// export const fetchCars = createAsyncThunk(GET_CARS, () => Cars, // axios
//   //   .get('../../DumyData/cars.json')
//   //   .then((response) => response.data)
// );

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
  },
});

export default carSlice.reducer;

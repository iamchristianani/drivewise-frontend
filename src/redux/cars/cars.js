import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { GET_CARS, REMOVE_CAR } from '../actionTypes';
// import Cars from '../../DumyData/cars.json';

const initialState = {
  loading: false,
  cars: [],
  error: '',
};

// const fetchCars = createAsyncThunk(GET_CARS, () => Cars);
// export const fetchCars = createAsyncThunk(GET_CARS, () => Cars, // axios
//   //   .get('../../DumyData/cars.json')
//   //   .then((response) => response.data)
// );
const URL = 'https://drivewise.up.railway.app/api/v1/cars';
const fetchCars = createAsyncThunk(GET_CARS, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
});

const removeCarAction = createAsyncThunk(
  REMOVE_CAR,
  async (id, { getState }) => {
    const { cars } = getState().cars;
    const filteredCars = cars.filter((car) => car.id !== id);
    return filteredCars;
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

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const newBalance = createAsyncThunk(
  '/user/balance',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.patch('/user/balance', { newBalance: userData });
      // thunkAPI.dispatch(summary())
      // console.log(res.data);
      // setAuthHeader(res.data.accessToken);
      // console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const categories = createAsyncThunk(
  '/transaction/expense-categories',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.get('/transaction/expense-categories');
      // thunkAPI.dispatch(summary())
      // console.log(res.data);
      // setAuthHeader(res.data.accessToken);
      // console.log(res.data);
      //   console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

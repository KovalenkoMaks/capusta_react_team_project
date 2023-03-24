import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const newBalance = createAsyncThunk(
  '/user/balance',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.patch('/user/balance', userData);
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
export const addAnExpense = createAsyncThunk(
  '/transaction/expense',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/transaction/expense', userData);

      console.log(res.data);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const delTransaction = createAsyncThunk(
  '/transaction/delete',
  async (userData, thunkAPI) => {
    console.log(userData);
    try {
      const res = await axios.delete(`/transaction/${userData}`);

      console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//-----------------------------------------------------------------//
export const getExpansesCategories = createAsyncThunk(
  'categories/getExpansesCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/transaction/expense-categories');
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getIncomeCategories = createAsyncThunk(
  'categories/getIncomeCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/transaction/income-categories');
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

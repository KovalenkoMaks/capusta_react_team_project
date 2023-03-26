import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
const notifySuccess = text =>
  toast.success(text, {
    theme: 'colored',
  });
const notifyError = text => {
  toast.error(text, {
    theme: 'colored',
  });
};
const notifyWarn = text => {
  toast.warn(text, {
    theme: 'colored',
  });
};
export const newBalance = createAsyncThunk(
  '/user/balance',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.patch('/user/balance', userData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const expenseCategories = createAsyncThunk(
  '/transaction/expense-categories',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/transaction/expense-categories');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const incomesCategories = createAsyncThunk(
  '/transaction/income-categories',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/transaction/income-categories');
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
      notifySuccess('Expense added!');
      return res.data;
    } catch (error) {
      notifyError('Something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addAnIncome = createAsyncThunk(
  '/transaction/income',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/transaction/income', userData);
      notifySuccess('Income added!');
      getMonthStatsIncomes();
      return res.data;
    } catch (error) {
      notifyError('Something went wrong');

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const delTransaction = createAsyncThunk(
  '/transaction/delete',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.delete(`/transaction/${userData}`);
      notifyWarn('Deleted!');
      return res.data;
    } catch (error) {
      notifyError('Something went wrong');

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getMonthStatsExpenses = createAsyncThunk(
  'GetExpensStats',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/transaction/expense');
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
export const getMonthStatsIncomes = createAsyncThunk(
  'GetIncomesStats',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/transaction/income');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getDataTransaction = createAsyncThunk(
  '/transaction/period-data',
  async (date, { rejectWithValue }) => {
    try {
      const result = await axios.get('/transaction/period-data', {
        params: {
          date: date,
        },
      });
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

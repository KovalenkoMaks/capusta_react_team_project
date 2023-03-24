import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getExpanses = createAsyncThunk(
  'transaction/getExpanses', //под капотом создаст статусы
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await axios.get('/transaction/expense');

      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const addExpanses = createAsyncThunk(
  'trancaction/addExpanses',
  async (trancactionItem, { rejectedWithValue }) => {
    try {
      const { data } = await axios.post(
        '/transaction/expense',
        trancactionItem
      );
      return data; //{newBalance:"ajefhapof",transaction:{asdjpadfhpaiefghpeghwpejghpwegjp}}
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
export const fetchIncome = createAsyncThunk(
  'transaction/getIncome', //под капотом создаст статусы
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await axios.get('/transaction/income');

      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const addIncome = createAsyncThunk(
  'trancaction/addIncome',
  async (trancactionItem, { rejectedWithValue }) => {
    try {
      const { data } = await axios.post('/transaction/income', trancactionItem);
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const newBalance = createAsyncThunk(
  'balance/newBalance',
  async newBalance => {
    const { data } = await axios.patch('/user/balance', newBalance);

    return data;
  }
);

export const getExpansesMonthsOperation = createAsyncThunk(
  'trancaction/getExpansesMonths',

  async (date, { rejectedWithValue }) => {
    try {
      const { data } = await axios.get(`/transaction/period-data`, date);
      console.log(data);
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const deleteTrancaction = createAsyncThunk(
  'trancaction/deleteTrancaction',

  async (id, { rejectedWithValue }) => {
    try {
     const {data}= await axios.delete(`/transaction/${id}`);
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

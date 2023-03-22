import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = ``;
// };

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('auth/register', userData);
      //   console.log(res);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', userData);
      console.log(res.data.sid);
      setAuthHeader(res.data.accessToken);
      // console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/auth/logout', userData);
      console.log(res);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { sid, refreshToken } = state.auth;

  if (sid === null) {
    return thunkAPI.rejectWithValue();
  }
  setAuthHeader(refreshToken);
  try {
    const { data } = await axios.post('/auth/refresh', { sid });
    // console.log(data);
    setAuthHeader(data.newAccessToken);
    return data;
  } catch (error) {
    // clearAuthHeader();
    console.log(error);
    return thunkAPI.rejectWithValue();
  }
});

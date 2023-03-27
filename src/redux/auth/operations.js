import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const notifySuccess = text =>
  toast.success(text, {
    theme: 'colored',
  });
const notifyWarn = text => {
  toast.warn(text, {
    theme: 'colored',
  });
};

axios.defaults.baseURL = 'https://kapusta-backend.p.goit.global/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('auth/register', userData);
      notifySuccess('Registration is success!');
      return res.data;
    } catch (error) {
      notifyWarn('Provided email already exists');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', userData);
      setAuthHeader(res.data.accessToken);
      notifySuccess('Welcome!');
      // console.log(res);
      return res.data;
    } catch (error) {
      notifyWarn(`Email doesn't exist / Password is wrong`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/auth/logout', userData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { sid, refreshToken } = state.auth;

  if (!sid) {
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
export const getAllUserData = createAsyncThunk('user', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/user');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

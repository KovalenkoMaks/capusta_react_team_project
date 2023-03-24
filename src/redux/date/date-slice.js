import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  date: '',
};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setDateStore(state, { payload }) {
      console.log(payload);
      state.date = payload;
    },
  },
});

export const { setDateStore } = dateSlice.actions;

export default dateSlice.reducer;

import { reportsInitialState } from './reports-initialState';
import { getDataTransaction } from './reports-operations';
import { createSlice } from '@reduxjs/toolkit';
const reportsReducer = createSlice({
  name: 'reports',
  initialState: reportsInitialState,
  extraReducers: {
    [getDataTransaction.fulfilled]: (state, { payload }) => {
      state.incomes = payload.data.incomes;
      state.expenses = payload.data.expenses;
    },
  },
}); 
// export const reportsReducer = reports.reducer; 
export default reportsReducer.reducer;

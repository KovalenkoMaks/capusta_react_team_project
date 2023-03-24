import {
  getExpansesCategories,
  getIncomeCategories,
} from './catrgories-operation';
import { createSlice } from '@reduxjs/toolkit';
//-----------------------------------------------------------------------------------------//

const initialState = {
  incomeArr: [],
  expansesArr: [],
};

const categorieSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: {
    [getExpansesCategories.pending]: (state, { payload }) => {},
    [getExpansesCategories.fulfilled]: (state, { payload }) => {
      state.expansesArr = payload;
    },
    [getExpansesCategories.rejected]: (state, { payload }) => {},
    [getIncomeCategories.pending]: (state, { payload }) => {},
    [getIncomeCategories.fulfilled]: (state, { payload }) => {
      state.incomeArr = payload;
    },
    [getIncomeCategories.rejected]: (state, { payload }) => {},
  },
});

export default categorieSlice.reducer;

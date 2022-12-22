import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    list: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    getProductStart(state) {
      state.isFetching = true;
    },
    getProductSuccess(state, action) {
      state.isFetching = false;
      state.error = false;
      state.list = action.payload;
    },
    getProductFail(state) {
      state.isFetching = false;
      state.error = true;
      state.list = null;
    },
  },
});

export default productSlice.reducer;
export const { getProductFail, getProductStart, getProductSuccess } = productSlice.actions;

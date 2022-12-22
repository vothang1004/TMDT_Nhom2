import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
  },
  reducers: {
    addToCart(state, action) {
      const cartItem = state.list.find((item) => item._id === action.payload._id);
      if (cartItem) {
        state.list = state.list.filter((item) => item._id !== cartItem._id);
      } else {
        state.list.push(action.payload);
      }
    },
  },
});

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;

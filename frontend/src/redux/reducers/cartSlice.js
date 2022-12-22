import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
  },
  reducers: {
    addToCart(state, action) {
      const cartItem = state.list.find((item) => item.id === action.payload.id);
      if (cartItem) {
        state.list = state.list.filter(item => item.id !== cartItem.id)
      } else {
        state.list.push(action.payload);
      }
    },
  },
});

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart() {},
    loginFail() {},
    loginSuccess() {},
  },
});

export default authSlice.reducer;
export const { loginStart, loginFail, loginSuccess } = authSlice.actions;

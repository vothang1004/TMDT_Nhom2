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
    // logout
    logoutStart() {},
    logoutSuccess() {},
    logoutFail() {},
  },
});

export default authSlice.reducer;
export const { loginStart, loginFail, loginSuccess, logoutStart, logoutSuccess, logoutFail } = authSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart(state) {
      state.login.isFetching = true;
    },
    loginFail(state) {
      state.login.isFetching = false;
      state.login.error = true;
      state.login.currentUser = null;
    },
    loginSuccess(state, action) {
      state.login.isFetching = false;
      state.login.error = false;
      state.login.currentUser = action.payload;
    },
    // logout
    logoutStart(state) {
      state.login.isFetching = true;
      state.login.error = false;
    },
    logoutSuccess(state) {
      state.login.isFetching = false;
      state.login.error = false;
      state.login.currentUser = null;
    },
    logoutFail(state) {
      state.login.isFetching = false;
      state.login.error = true;
    },
    // register
    registerStart(state) {
      state.register.isFetching = false;
    },
    registerSuccess(state) {
      state.register.isFetching = false;
      state.register.error = false;
    },
    registerFail(state) {
      state.register.isFetching = false;
      state.register.error = true;
    },
    // update user
    updateUser(state, action) {
      state.login.currentUser = { ...state.login.currentUser, user: action.payload };
    },
  },
});

export default authSlice.reducer;
export const {
  loginStart,
  loginFail,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  logoutFail,
  registerStart,
  registerFail,
  registerSuccess,
  updateUser
} = authSlice.actions;

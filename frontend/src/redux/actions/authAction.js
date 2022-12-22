import { BASE_URL } from '~/utils/constants';
import axios from 'axios';
import {
  loginFail,
  loginStart,
  loginSuccess,
  logoutFail,
  logoutStart,
  logoutSuccess,
  registerFail,
  registerStart,
  registerSuccess,
} from '../reducers/authSlice';

// login
const login = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const resp = await axios.post(`${BASE_URL}/v1/auth/login`, user);
    if (resp && resp.status === 200) {
      dispatch(loginSuccess(resp.data));
      navigate('/file/root');
    }
  } catch (error) {
    dispatch(loginFail());
    navigate('/login');
    console.log(error);
  }
};
// logout
const logout = async (dispatch, navigate) => {
  try {
    dispatch(logoutStart());
    dispatch(logoutSuccess());
    navigate('/');
  } catch (error) {
    dispatch(logoutFail());
  }
};
// register
const register = async (user, dispath, navigate) => {
  dispath(registerStart());
  try {
    const resp = await axios.post(`${BASE_URL}/v1/auth/register`, user);
    if (resp && resp.status === 200) {
      dispath(registerSuccess());
      navigate('/login');
    }
  } catch (error) {
    dispath(registerFail());
    console.log(error);
  }
};

export { login, logout, register };

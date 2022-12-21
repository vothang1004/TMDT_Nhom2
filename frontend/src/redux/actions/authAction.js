import { BASE_URL } from '~/utils/constants';
import axios from 'axios';
import { loginFail, loginStart, loginSuccess } from '../reducers/authSlice';
const login = async (token, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const resp = await axios.post(`${BASE_URL}/api/login`);
    if (resp && resp.status === 200) {
      dispatch(loginSuccess(resp.data));
    }
  } catch (error) {
    dispatch(loginFail());
    console.log(error);
  }
};

const logout = async () => {
    
}

export { login, logout };

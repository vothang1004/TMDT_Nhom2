import axios from 'axios';
import { BASE_URL } from '~/utils/constants';
import { getProductFail, getProductStart, getProductSuccess } from '../reducers/productSlice';

// getAll
const getAllProduct = async (dispatch) => {
  try {
    dispatch(getProductStart());
    const resp = await axios.get(`${BASE_URL}/productapi/products`);
    if (resp && resp.status === 200) {
      dispatch(getProductSuccess(resp.data));
    }
  } catch (error) {
    console.log(error);
    dispatch(getProductFail());
  }
};

export { getAllProduct };

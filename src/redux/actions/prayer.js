import axios from 'axios';
import {BASE_URL} from '../base-url';
import {CREATE_PRAYER, GET_PRAYER} from './types';
//Local Types
export const PRAYER_FAILED = 'PRAYER_FAILED';
export const LOADING_PRAYER = 'LOADING_PRAYER';
export const createPrayer = params => {
  console.log('HERE');
  console.log(params);
  return async dispatch => {
    dispatch(prayerLoading());

    try {
      const res = await axios.post(
        `${BASE_URL}api/prayer`,
        JSON.stringify(params),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      dispatch(createprayer(res));
    } catch (err) {
      console.log(err.response.data);
      dispatch(prayerFailed(err.response));
    }
  };
};
export const getPrayer = uid => {
  console.log('HERE');
  return async dispatch => {
    dispatch(prayerLoading());

    try {
      const res = await axios.get(`${BASE_URL}api/prayer/user/${uid}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      dispatch(getprayer(res));
    } catch (err) {
      console.log(err.response.data);
      dispatch(prayerFailed(err.response));
    }
  };
};
//helper
const getprayer = res => ({
  type: GET_PRAYER,
  payload: res,
});
const createprayer = res => ({
  type: CREATE_PRAYER,
  payload: res,
});
const prayerLoading = () => ({
  type: LOADING_PRAYER,
});

const prayerFailed = res => ({
  type: PRAYER_FAILED,
  payload: res,
});

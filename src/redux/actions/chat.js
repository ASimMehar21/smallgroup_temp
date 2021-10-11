import axios from 'axios';
import {BASE_URL} from '../base-url';
import {SEND_MSG} from './types';
//Local Types
export const CHAT_FAILED = 'PRAYER_FAILED';
export const LOADING_CHAT = 'LOADING_PRAYER';
export const sendMsg = (params, rid) => {
  console.log(params, '\n', rid);
  return async dispatch => {
    // dispatch(chatLoading());
    try {
      const res = await axios.post(
        `${BASE_URL}api/prayer/response/${rid}`,
        JSON.stringify(params),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      dispatch(sendmsg(res));
    } catch (err) {
      console.log(err.response.data);
      dispatch(chatFailed(err.response));
    }
  };
};

//helper

const sendmsg = res => ({
  type: SEND_MSG,
  payload: res,
});
const chatLoading = () => ({
  type: LOADING_PRAYER,
});

const chatFailed = res => ({
  type: CHAT_FAILED,
  payload: res,
});

import {LOADING_CHAT, CHAT_FAILED} from '../actions/chat';
import {DELETE_CHAT, GET_CHAT, SEND_MSG} from '../actions/types';

const initialState = {
  userId: '',
  message: '',
  isLoading: false,
  isError: false,
  isSuccess: false,
  errMsg: null,
  prayerData: null,
  status: '',
};
export const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CHAT:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        errMsg: null,
        message: null,
      };
    case SEND_MSG:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
        message: 'Event created succesfully',
      };
    case GET_CHAT:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
        message: '',
        prayerData: action.payload,
      };
    case DELETE_CHAT:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
        message: 'Prayer Deleted',
      };
    case CHAT_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        errMsg: null,
        message: 'chat failed',
      };

    default:
      return state;
  }
};

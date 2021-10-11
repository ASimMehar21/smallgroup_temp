import {LOADING_CHAT, CHAT_FAILED} from '../actions/chat';
import {
  CREATE_PRAYER,
  UPDATE_PRAYER,
  DELETE_PRAYER,
  GET_PRAYER,
} from '../actions/types';

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
    case CREATE_CHAT:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
        message: 'Event created succesfully',
      };
    case PRAYER_CHAT:
      return {
        ...state,
        isSuccess: false,
        errMsg: null,
        message: action.payload.data.message,
      };
    case GET_PRAYER:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
        message: '',
        prayerData: action.payload,
      };
    case DELETE_PRAYER:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
        message: 'Prayer Deleted',
      };
    case UPDATE_PRAYER:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
        message: 'Prayer Updated',
      };
    default:
      return state;
  }
};

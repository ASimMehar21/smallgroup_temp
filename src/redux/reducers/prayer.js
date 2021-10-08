import {LOADING_PRAYER, PRAYER_FAILED} from '../actions/prayer';
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
export const prayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PRAYER:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        errMsg: null,
        message: null,
      };
    case CREATE_PRAYER:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
        message: 'Event created succesfully',
      };
    case PRAYER_FAILED:
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

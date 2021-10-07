import {CALENDAR_FAILED, CALENDAR_LOADING} from '../actions/calendarAction';
import {
  CREATE_ACTIVITY,
  DELETE_ACTIVITY,
  GET_ACTIVITY,
  UPDATE_ACTIVITY,
} from '../actions/types';

const initialState = {
  userId: '',
  message: '',
  isLoading: false,
  isError: false,
  isSuccess: false,
  errMsg: null,
  activityData: null,
  status: '',
};
export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CALENDAR_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        errMsg: null,
        message: null,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
        message: 'Event created succesfully',
      };
    case CALENDAR_FAILED:
      return {
        ...state,
        isSuccess: false,
        errMsg: null,
        message: action.payload.data.message,
      };
    case GET_ACTIVITY:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
        message: '',
        activityData: action.payload.data,
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
        message: 'Event Deleted',
      };
    case UPDATE_ACTIVITY:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
        message: 'Event Updated',
      };
    default:
      return state;
  }
};

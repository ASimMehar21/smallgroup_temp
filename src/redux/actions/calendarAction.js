import axios from 'axios';
import {BASE_URL} from '../base-url';
import {
  CREATE_ACTIVITY,
  DELETE_ACTIVITY,
  GET_ACTIVITY,
  UPDATE_ACTIVITY,
} from './types';
//Local Types
export const CALENDAR_FAILED = 'CALENDAR_FAILED';
export const CALENDAR_LOADING = 'CALENDAR_LOADING';
export const createEvent = params => {
  console.log('HERE');
  console.log(params);
  return async dispatch => {
    dispatch(calendarLoading());

    try {
      const res = await axios.post(
        `${BASE_URL}api/calender`,
        JSON.stringify(params),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      dispatch(createactivity(res));
    } catch (err) {
      console.log(err.response.data);
      dispatch(activityFailed(err.response));
    }
  };
};
export const getEvent = uid => {
  return async dispatch => {
    dispatch(calendarLoading());

    try {
      const res = await axios.get(`${BASE_URL}api/calender/${uid}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      dispatch(getactivity(res));
    } catch (err) {
      console.log(err.response.data);
      dispatch(activityFailed(err.response));
    }
  };
};
export const updateEvent = uid => {
  return async dispatch => {
    dispatch(calendarLoading());

    try {
      const res = await axios.get(`${BASE_URL}api/calender/${uid}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      dispatch(updateactivity(res));
    } catch (err) {
      console.log(err.response.data);
      dispatch(activityFailed(err.response));
    }
  };
};
export const deleteEvent = uid => {
  return async dispatch => {
    dispatch(calendarLoading());

    try {
      const res = await axios.get(`${BASE_URL}api/calender/${uid}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      dispatch(deleteactivity(res));
    } catch (err) {
      console.log(err.response.data);
      dispatch(activityFailed(err.response));
    }
  };
};
//helper
const getactivity = res => ({
  type: GET_ACTIVITY,
  payload: res,
});
const updateactivity = res => ({
  type: UPDATE_ACTIVITY,
  payload: res,
});
const deleteactivity = res => ({
  type: DELETE_ACTIVITY,
  payload: res,
});
const createactivity = res => ({
  type: CREATE_ACTIVITY,
  payload: res,
});
const calendarLoading = () => ({
  type: CALENDAR_LOADING,
});

const activityFailed = res => ({
  type: CALENDAR_FAILED,
  payload: res,
});

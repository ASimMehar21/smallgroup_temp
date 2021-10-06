import axios from 'axios';
import {BASE_URL} from '../base-url';
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  CONFIRM_EMAIL,
  CONFIRM_CODE,
  CREATE_GROUP,
  GOOGLE_LOGIN,
  GOOGLE_SIGNUP,
} from './types';
//Local Types
export const AUTH_LOADING = 'AUTH_LOADING';
export const AUTH_FAILED = 'AUTH_FAILED';
export const INTEREST_FAILED = 'INTEREST_FAILED';
export const EMAIL_FAILED = 'EMAIL_FAILED';
export const CODE_FAILED = 'CODE_FAILED';
export const REG_FAILED = 'REG_FAILED';

export const loginUser = params => {
  console.log('HERE');
  console.log(params);
  return async dispatch => {
    dispatch(authLoading());

    try {
      const res = await axios.post(
        `${BASE_URL}auth/login`,
        JSON.stringify(params),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(res);
      if (res && res.data.status !== 200) {
        console.log(res);
        return dispatch(authFailed(res));
      }
      dispatch(loginSuccess(res));
    } catch (err) {
      console.log(err.response.data);
      dispatch(authFailed(err.response));
    }
  };
};

export const emailInvitation = params => {
  console.log('HERE');
  const id = JSON.stringify('61563003771e72607d18a3ce');
  return async dispatch => {
    // dispatch(authLoading());
    try {
      const res = await axios.put(
        `${BASE_URL}api/group/sendinvites/61563003771e72607d18a3ce`,
        JSON.stringify(params),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      // if (res && res.data.status !== 200) return dispatch(emailfailed(res));

      dispatch(confirmemail(res));
    } catch (err) {
      dispatch(emailfailed(err.response));
    }
  };
};
export const emailactive = params => {
  console.log('HERE');
  return async dispatch => {
    // dispatch(authLoading());
    try {
      const res = await axios.post(
        `${BASE_URL}user/activation_email/confirm`,
        JSON.stringify(params),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      if (res && res.data.status !== 200) return dispatch(codefailed(res));
      dispatch(confirmCode(res));
    } catch (err) {
      dispatch(codefailed(err.response));
    }
  };
};
export const registerUser = params => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `${BASE_URL}auth/signup`,
        JSON.stringify(params),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      if (res && res.data.status !== 200) return dispatch(registerFAILED(res));
      dispatch(registerSuccess(res));
    } catch (err) {
      dispatch(registerFAILED(err.response));
    }
  };
};
export const CreateGroup = params => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `${BASE_URL}api/group/61549c6effc4e455cc6faf11`,
        JSON.stringify(params),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      if (res && res.data.status !== 200) return dispatch(authFailed(res));
      dispatch(creategroup(res));
    } catch (err) {
      dispatch(authFailed(err.response));
    }
  };
};
//Google
export const Googlelogin = params => {
  console.log('HERE');
  console.log(params);
  return async dispatch => {
    dispatch(authLoading());

    try {
      const res = await axios.post(
        `${BASE_URL}auth/google/login`,
        JSON.stringify(params),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(res);
      if (res && res.data.status !== 200) {
        console.log(res);
        return dispatch(authFailed(res));
      }
      dispatch(logingoogle(res));
    } catch (err) {
      console.log(err.response.data);
      dispatch(authFailed(err.response));
    }
  };
};
export const GoogleSignup = params => {
  console.log('HERE');
  console.log(params);
  return async dispatch => {
    dispatch(authLoading());

    try {
      const res = await axios.post(
        `${BASE_URL}auth/google/signup`,
        JSON.stringify(params),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(res);
      if (res && res.data.status !== 200) {
        console.log(res);
        return dispatch(authFailed(res));
      }
      dispatch(signupgoogle(res));
    } catch (err) {
      console.log(err.response.data);
      dispatch(authFailed(err.response));
    }
  };
};
//helper Functions
const signupgoogle = res => ({
  type: GOOGLE_SIGNUP,
  payload: res,
});
const logingoogle = res => ({
  type: GOOGLE_LOGIN,
  payload: res,
});
const creategroup = res => ({
  type: CREATE_GROUP,
  payload: res,
});
const authLoading = () => ({
  type: AUTH_LOADING,
});
const authFailed = err => ({
  type: AUTH_FAILED,
  payload: err,
});
const loginSuccess = res => ({
  type: LOGIN_USER,
  payload: res,
});

const registerSuccess = res => ({
  type: REGISTER_USER,
  payload: res,
});
const registerFAILED = err => ({
  type: REG_FAILED,
  payload: err,
});

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER,
});
const confirmemail = res => ({
  type: CONFIRM_EMAIL,
  payload: res,
});
const emailfailed = err => ({
  type: EMAIL_FAILED,
  payload: err,
});
const confirmCode = res => ({
  type: CONFIRM_CODE,
  payload: res,
});
const codefailed = err => ({
  type: CODE_FAILED,
  payload: err,
});

import {
  CREATE_GROUP,
  JOIN_GROUP,
  LEAVE_GROUP,
  UPDATE_GROUP,
  GET_ALL_GROUP,
  INVITE_GROUP,
  GET_ALL_CHAT_GROUP,
  SEND_MESSAGE_GROUP,
  REMOVE_PEOPLE_GROUP,
  GET_ALL_INVITE_GROUP,
  RESPOND_INVITE_GROUP,
  GET_ALL_MESSAGE_GROUP,
  GROUP_FAIL,
  CONFIRM_CODE,
  CONFIRM_EMAIL,
} from './types';
import {BASE_URL} from '../base-url';
import axios from 'axios';
import {CODE_FAILED, EMAIL_FAILED} from './auth';

//local Types
export const GROUP_FAILED = 'GROUP_FAILED';
export const GROUP_LOADING = 'GROUP_LOADING';
export const CreateGroup = (params, uid) => {
  return async dispatch => {
    dispatch(groupLoading());
    try {
      const res = await axios.post(
        `${BASE_URL}api/group/${uid}`,
        JSON.stringify(params),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      dispatch(creategroup(res));
    } catch (err) {
      dispatch(groupFail(err.response));
    }
  };
};
export const emailInvitation = (params, uid) => {
  return async dispatch => {
    dispatch(groupLoading());
    try {
      const res = await axios.put(
        `${BASE_URL}api/group/sendinvites/${uid}`,
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
export const groupJoin = params => {
  console.log('HERE');
  return async dispatch => {
    dispatch(groupLoading());
    dispatch(groupLoading());
    try {
      const res = await axios.put(
        `${BASE_URL}api/group/joingroup/code`,
        JSON.stringify(params),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      if (res?.data?.message) {
        dispatch(codefailed(res));
      }
      dispatch(confirmCode(res));
      return res;
    } catch (err) {
      dispatch(codefailed(err.response));
    }
  };
};

export const updategroup = (params, id) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${BASE_URL}api/group/${id}`, params, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      dispatch(group(res));
    } catch (err) {
      dispatch(groupFAILED(err));
    }
  };
};
//
export const inviteGroup = (token, params) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${BASE_URL}user/chatgroup/invite`, params, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (res && res.data.status !== 200)
        return dispatch(groupFAILED(res.data));
      dispatch(groupInvite(res));
    } catch (err) {
      dispatch(groupFAILED(err));
    }
  };
};
export const leaveGroup = (token, params) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${BASE_URL}user/chatgroup/leave`, params, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (res && res.data.status !== 200)
        return dispatch(groupFAILED(res.data));
      dispatch(leavegroup(res));
    } catch (err) {
      dispatch(groupFAILED(err));
    }
  };
};
export const getallGroup = id => {
  console.log(id);
  return async dispatch => {
    try {
      const res = await axios.get(`${BASE_URL}api/group/user/${id}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
      dispatch(getalljoingroup(res));
    } catch (err) {
      dispatch(groupFAILED(err));
    }
  };
};
export const getallCHATGroup = token => {
  return async dispatch => {
    try {
      const res = await axios.get(`${BASE_URL}user/chatgroup/all`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (res && res.data.status !== 200)
        return dispatch(groupFAILED(res.data));
      dispatch(getallchatgroup(res));
    } catch (err) {
      dispatch(groupFAILED(err));
    }
  };
};
export const sendMessageInGroup = (token, params) => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `${BASE_URL}user/chatgroup/send/message`,
        params,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (res && res.data.status !== 200)
        return dispatch(groupFAILED(res.data));
      dispatch(sendmessageingroup(res));
    } catch (err) {
      dispatch(groupFAILED(err));
    }
  };
};
export const removepeopleGroup = (token, params) => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `${BASE_URL}user/chatgroup/remove/user`,
        params,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (res && res.data.status !== 200)
        return dispatch(groupFAILED(res.data));
      dispatch(removepeoplegroup(res));
    } catch (err) {
      dispatch(groupFAILED(err));
    }
  };
};
export const getallGroupInvites = token => {
  return async dispatch => {
    try {
      const res = await axios.get(`${BASE_URL}user/chatgroup/all/invites`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (res && res.data.status !== 200)
        return dispatch(groupFAILED(res.data));
      dispatch(groupinvites(res));
    } catch (err) {
      dispatch(groupFAILED(err));
    }
  };
};
export const respondInviteGroup = (token, params) => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `${BASE_URL}user/chatgroup/invite/respond`,
        params,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (res && res.data.status !== 200)
        return dispatch(groupFAILED(res.data));
      dispatch(respondgroupinvites(res));
    } catch (err) {
      dispatch(groupFAILED(err));
    }
  };
};
export const getallGroupMessages = (token, id) => {
  return async dispatch => {
    try {
      const res = await axios.get(
        `${BASE_URL}user/chatgroup/all/messages/${id}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (res && res.data.status !== 200)
        return dispatch(groupFAILED(res.data));
      dispatch(getgroupmessages(res));
    } catch (err) {
      dispatch(groupFAILED(err));
    }
  };
};
//Helper FunctiON

const getgroupmessages = res => ({
  type: GET_ALL_MESSAGE_GROUP,
  payload: res,
});
const respondgroupinvites = res => ({
  type: RESPOND_INVITE_GROUP,
  payload: res,
});
const groupinvites = res => ({
  type: GET_ALL_INVITE_GROUP,
  payload: res,
});

const removepeoplegroup = res => ({
  type: REMOVE_PEOPLE_GROUP,
  payload: res,
});
const sendmessageingroup = res => ({
  type: SEND_MESSAGE_GROUP,
  payload: res,
});
const getallchatgroup = res => ({
  type: GET_ALL_CHAT_GROUP,
  payload: res,
});
const getalljoingroup = res => ({
  type: GET_ALL_GROUP,
  payload: res,
});

const leavegroup = res => ({
  type: LEAVE_GROUP,
  payload: res,
});
const groupFAILED = err => ({
  type: GROUP_FAILED,
  payload: err,
});

const sendgroup = res => ({
  type: CREATE_GROUP,
  payload: res,
});
const group = res => ({
  type: UPDATE_GROUP,
  payload: res,
});
const groupInvite = res => ({
  type: INVITE_GROUP,
  payload: res,
});
const creategroup = res => ({
  type: CREATE_GROUP,
  payload: res,
});
const groupFail = res => ({
  type: GROUP_FAIL,
  payload: res,
});
const confirmCode = res => ({
  type: CONFIRM_CODE,
  payload: res,
});
const codefailed = err => ({
  type: CODE_FAILED,
  payload: err,
});
const confirmemail = res => ({
  type: CONFIRM_EMAIL,
  payload: res,
});
const emailfailed = err => ({
  type: EMAIL_FAILED,
  payload: err,
});
const groupLoading = () => ({
  type: GROUP_LOADING,
});

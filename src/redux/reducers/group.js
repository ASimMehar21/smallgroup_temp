import {CODE_FAILED} from '../actions/auth';
import {GROUP_FAILED, GROUP_LOADING} from '../actions/group';
import {
  CREATE_GROUP,
  JOIN_GROUP,
  LEAVE_GROUP,
  GET_GROUP,
  GET_ALL_GROUP,
  INVITE_GROUP,
  GET_ALL_CHAT_GROUP,
  SEND_MESSAGE_GROUP,
  REMOVE_PEOPLE_GROUP,
  GET_ALL_INVITE_GROUP,
  RESPOND_INVITE_GROUP,
  GET_ALL_MESSAGE_GROUP,
  CONFIRM_CODE,
} from '../actions/types';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errMsg: null,
  message: '',
  group_data: null,
  all_group_data: null,
  all_chatgroup_data: null,
  invitations: null,
  group_messages: null,
  joinGroupData: null,
  isgroup: false,
};

export const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case GROUP_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        errMsg: null,
        message: null,
        isgroup: false,
        message: null,
      };
    case GROUP_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload.message,
      };
    case GET_ALL_MESSAGE_GROUP:
      return {
        ...state,
        group_messages: action.payload.data,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
      };
    case RESPOND_INVITE_GROUP:
      return {
        ...state,
        message: action.payload.data.message,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
      };
    case GET_ALL_INVITE_GROUP:
      return {
        ...state,
        invitations: action.payload.data,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
      };
    case REMOVE_PEOPLE_GROUP:
      return {
        ...state,
        message: action.payload.data.message,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
      };
    case SEND_MESSAGE_GROUP:
      return {
        ...state,
        message: action.payload.data.message,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
      };
    case GET_ALL_CHAT_GROUP:
      return {
        ...state,
        all_chatgroup_data: action.payload.data,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
      };
    case INVITE_GROUP:
      return {
        ...state,
        message: action.payload.data.message,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
      };
    case GET_ALL_GROUP:
      return {
        ...state,
        all_group_data: action.payload.data,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
      };
    case CREATE_GROUP:
      return {
        ...state,
        message: action.payload.data.message,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
      };
    case GET_GROUP:
      return {
        ...state,
        group_data: action.payload.data,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
      };
    case JOIN_GROUP:
      return {
        ...state,
        message: action.payload.data.message,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
      };
    case LEAVE_GROUP:
      return {
        ...state,
        message: action.payload.data.message,
        isLoading: false,
        isError: false,
        isSuccess: true,
        errMsg: null,
      };
    case CODE_FAILED:
      console.log('action.payload', action.payload);
      return {
        ...state,
        message: action.payload.data.message,
        isSuccess: false,
      };
    case CONFIRM_CODE:
      console.log('action.payload', action.payload);
      return {
        ...state,
        joinGroupData: action.payload.data,
        isError: false,
        errMsg: null,
        isLoading: false,
        isSuccess: true,
      };
    default:
      return state;
  }
};

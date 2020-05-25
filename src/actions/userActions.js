import {
  GET_USER_PROFILE_PENDING,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE
} from '../constants';

const getUserPending = () => ({
  type: GET_USER_PROFILE_PENDING
});

const getUserSuccess = (user) => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload: {
    ...user
  }
});

const getUserFailure = (error) => ({
  type: GET_USER_PROFILE_FAILURE,
  payload: {
    error
  }
});

export default {
  getUserPending,
  getUserSuccess,
  getUserFailure
};

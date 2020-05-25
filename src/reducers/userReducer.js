import {
  GET_USER_PROFILE_PENDING,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE
} from '../constants';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        loading: false,
        ...action.payload
      };
    case GET_USER_PROFILE_FAILURE:
      return {
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default userReducer;

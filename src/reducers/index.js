import user from './userReducer';
import repos from './reposReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  user,
  repos
});

import { combineReducers } from 'redux';
import place from '../db/reducer/place';
import login from '../db/reducer/login';

const appReducer = combineReducers({
  place,
  login
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;


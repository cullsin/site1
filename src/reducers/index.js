import { combineReducers } from 'redux';
import place from '../db/reducer/place';

const appReducer = combineReducers({
  place
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;


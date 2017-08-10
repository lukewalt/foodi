
import { combineReducers } from 'redux';
import * as recipesReducer from './recipes';

// creating a mechanism adding different reducers
export default combineReducers(Object.assign(
  recipesReducer,
));

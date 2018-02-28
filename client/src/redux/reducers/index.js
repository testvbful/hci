import {combineReducers} from 'redux';
import animals from './animals';
import filter from './filter';

let reducers = {
    animals,
    filter
  };
  
  const rootReducer = combineReducers(reducers);

export default rootReducer;


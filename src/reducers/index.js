import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ReduxstagramReducer from './reduxstagramReducer';

export default combineReducers({
  reduxstagram: ReduxstagramReducer,
  routing: routerReducer

});

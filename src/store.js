import { applyMiddleware, createStore } from "redux";
import {syncHistoryWithStore} from 'react-router-redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";
import createBrowserHistory from 'history/createBrowserHistory'

const browserHistory = createBrowserHistory();

const middleware = composeWithDevTools(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, middleware);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

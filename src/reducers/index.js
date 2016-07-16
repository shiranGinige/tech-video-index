
 import { combineReducers } from 'redux';

import videoListReducer from './videoListReducers';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  videoList:videoListReducer,
  routing: routerReducer
});

export default rootReducer;
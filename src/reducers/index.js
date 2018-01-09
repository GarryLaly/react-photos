import { combineReducers } from 'redux';
import appData from './dataReducer.js';

const rootReducer = combineReducers({
    appData,
});

export default rootReducer;

import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer';

export default combineReducers({
    profile: profileReducer,
    sidebar: sideBarReducer
});
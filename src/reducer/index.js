import { combineReducers } from 'redux';
import career from '../reducer/career';
import nav from '../reducer/nav';



export default combineReducers({
    career,
    nav,
});

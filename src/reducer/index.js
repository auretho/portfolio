import { combineReducers } from 'redux';
import career from '../reducer/career';
import nav from '../reducer/nav';
import skills from '../reducer/skills';



export default combineReducers({
    career,
    nav,
    skills,
});

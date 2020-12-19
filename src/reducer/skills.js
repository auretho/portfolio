import html from '../components/Skills/img/html.png';
import css from '../components/Skills/img/css.png';
import javascript from '../components/Skills/img/javascript.png';
import php from '../components/Skills/img/php.png';
import react from '../components/Skills/img/react.png';
import redux from '../components/Skills/img/redux.png';
import node from '../components/Skills/img/node.png';
import sass from '../components/Skills/img/sass.png';
import mongodb from '../components/Skills/img/mongodb.png';
import MySQL from '../components/Skills/img/MySQL.png';
import git from '../components/Skills/img/git.png';
import white from '../components/Skills/img/white.png';

import { HEXAGON_CHANGE } from '../actions/skills';
import { ON_TOGGLE } from '../actions/nav';

const initialState = {
    imgVisible: false,
    icons: [
    {
        row1: [
            {
                white: white,
                path: html,
                description: "HTML 5",
                name: "html",
                styleTrue: { stroke: 'rgba(255, 255, 255, 0.295)', fill: '#fff' },
                styleFalse: { stroke: 'rgba(255, 255, 255, 0.295)' },
            },
            {
                white: white,
                path: css,
                description: "CSS 3",
                name: "css",
                styleTrue: { stroke: 'rgba(255, 255, 255, 0.295)', fill: '#fff' },
                styleFalse: { stroke: 'rgba(255, 255, 255, 0.295)' },
            },
            {
                white: white,
                path: javascript,
                description: "Javascript",
                name: "javascript",
                styleTrue: { stroke: 'rgba(255, 255, 255, 0.295)', fill: '#fff' },
                styleFalse: { stroke: 'rgba(255, 255, 255, 0.295)' },
            },
            {
                white: white,
                path: php,
                description: "PHP",
                name: "php",
                styleTrue: { stroke: 'rgba(255, 255, 255, 0.295)', fill: '#fff' },
                styleFalse: { stroke: 'rgba(255, 255, 255, 0.295)' },
            },
        ],
        row2: [
            {
                path: react
            },
            {
                path: redux
            },
            {
                path: node
            },
        ],
        row3: [
            {
                path: sass
            },
            {
                path: mongodb
            },
            {
                path: MySQL
            },
            {
                path: git
            }
        ] 
    }
    ]
}

const skills = (state = initialState, action = {}) => {
    switch (action.type) {
        case HEXAGON_CHANGE:
            return {
              ...state,
              ...action.payload,
            
            };
        case ON_TOGGLE:
            return {
                ...state,
            imgVisible: !state.imgVisible,
            };
    
        default:
            return state;
    }
};

export default skills;
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

const initialState = {
    icons: [
    {
        row1: [
            {
                white: white,
                path: html,
                description: "HTML 5",
            },
            {
                white: white,
                path: css,
                description: "CSS 3",
            },
            {
                white: white,
                path: javascript,
                description: "Javascript",
            },
            {
                white: white,
                path: php,
                description: "PHP",
            },
        ],
        row2: [
            {
                white: white,
                path: react,
                description: "React",
            },
            {
                white: white,
                path: redux,
                description: "Redux",

            },
            {
                white: white,
                path: node,
                description: "Node.js",
            },
        ],
        row3: [
            {
                white: white,
                path: sass,
                description: "Sass",
            },
            {
                white: white,
                path: mongodb,
                description: "MongoDB",
            },
            {
                white: white,
                path: MySQL,
                description: "MySQL",
            },
            {
                white: white,
                path: git,
                description: "Git",
            }
        ] 
    }
    ]
}

const skills = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default skills;
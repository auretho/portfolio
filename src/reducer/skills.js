// import { html.png, css.png } from '../components/Skills/img';

const initialState = {
    icons: [
        {
            path: "https://github.com/rexxars/react-hexagon/raw/master/logo/react-hexagon.png"
        },
        {
            path: "../components/Skills/img/css.png"
        },
        {
            path: "../components/Skills/img/javascript.png"
        },
    ]
}

const skills = (state = initialState, action = {}) => {
    switch (action.type) {
       
        default:
            return state;
    }
};

export default skills;
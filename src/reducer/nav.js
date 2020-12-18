const initialState = {
    sections: [
        {
            title: "Home",
            path: ""
        },
        {
            title: "Parcours",
            path: "parcours"
        },
        {
            title: "Compétences",
            path: "competences"
        },
        {
            title: "Projets",
            path: "projets"
        },
        {
            title: "Contact",
            path: "contact"
        }
]
}

const career = (state = initialState, action = {}) => {
    switch (action.type) {
       
        default:
            return state;
    }
};

export default career;
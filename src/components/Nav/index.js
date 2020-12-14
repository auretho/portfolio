import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Nav = () => (
    <nav className="nav">
        <NavLink className="nav-link" to="accueil">Accueil</NavLink>
        <NavLink className="nav-link" to="accueil">Infos</NavLink>
        <NavLink className="nav-link" to="accueil">Parcours</NavLink>
        <NavLink className="nav-link" to="accueil">Projets</NavLink>
        <NavLink className="nav-link" to="accueil">Contact</NavLink>
    </nav>
)

export default Nav;
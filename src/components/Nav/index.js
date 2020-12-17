import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import FingerprintIcon from '@material-ui/icons/Fingerprint';
import FlashAutoIcon from '@material-ui/icons/FlashAuto';

import './style.scss';

const Nav = () => (
    <nav className="nav">
        <div className="nav-block">
            <Link className="nav-link-home" to="/">
                <FlashAutoIcon style={{ fontSize: 50 }}  />
            </Link>
        </div>
        <div className="nav-block" id="navigation">
            <NavLink className="nav-link" exact to="/">
                Home
            </NavLink>
            <NavLink className="nav-link" to="/parcours">
                Parcours
            </NavLink>
            <NavLink className="nav-link" to="/competences">
                Compétences
            </NavLink>
            <NavLink className="nav-link" to="/projets">
                Projets
            </NavLink>
            <NavLink className="nav-link" to="/contact">
                Contact
            </NavLink>
        </div>
    </nav>
)

export default Nav;
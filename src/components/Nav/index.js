import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import FlashAutoIcon from '@material-ui/icons/FlashAuto';

import './style.scss';

const Nav = () => (
    <nav className="nav">
        <div className="nav-block">
            <Link className="nav-link-home" to="/">
                <FlashAutoIcon style={{ fontSize: 50 }}  />
            </Link>
        </div>
        <div className="nav-block menu" id="navigation">
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
        <div className="mobile-nav">
            <MenuIcon style={{ color: '#fff', fontSize: 50 }} />
            {/* <ul>
                <NavLink className="nav-link" exact to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink className="nav-link" to="/parcours">
                    <li>Parcours</li>
                </NavLink>
                <NavLink className="nav-link" to="/competences">
                    <li>Compétences</li>
                </NavLink>
                <NavLink className="nav-link" to="/projets">
                    <li>Projets</li>
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                    <li>Contact</li>
                </NavLink>
            </ul> */}
        </div>
    </nav>
)

export default Nav;
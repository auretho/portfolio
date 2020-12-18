import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import FlashAutoIcon from '@material-ui/icons/FlashAuto';

import './style.scss';

const Nav = ({sections}) => (
    <nav className="nav">
        <div className="nav-block">
            <Link className="nav-link-home" to="/">
                <FlashAutoIcon style={{ fontSize: 50 }}  />
            </Link>
        </div>
        <div className="nav-block menu" id="navigation">
            { sections.map((section) => (
                <NavLink key={section.title} className="nav-link" exact to={`/${section.path}`} >
                    {section.title}
                </NavLink>
            ))   
            }
        </div>
        <div className="mobile-nav">
            <MenuIcon style={{ color: '#fff', fontSize: 50 }} />
            <ul>
                { sections.map((section) => (
                <NavLink key={section.title} className="nav-link" exact to={`/${section.path}`}>
                    <li>{section.title}</li>
                </NavLink>
                ))
                }
            </ul>
        </div>
    </nav>
)

export default Nav;
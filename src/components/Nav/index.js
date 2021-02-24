import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import FlashAutoIcon from '@material-ui/icons/FlashAuto';
import MenuIcon from '@material-ui/icons/Menu';


import './style.scss';

const Nav = ({sections, opened, onToggle}) => {
    
    // const handleOutsideClick = (evt) => {
    //     // console.log(evt)
    // }

    return(
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
            <MenuIcon className="nav-burger" style={{ color: '#fff', fontSize: 50 }} open={opened ? opened : ""} onClick={onToggle}/>
            <ul className={opened ? "nav-list-mobile" : "nav-list-mobile-hidden"}>
                { sections.map((section) => (
                <NavLink key={section.title} className="nav-link" exact to={`/${section.path}`} open={opened ? opened : ""} onClick={onToggle} >
                    <li>{section.title}</li>
                </NavLink>
                ))
                }
            </ul>
        </div>
    </nav>
)}

export default Nav;
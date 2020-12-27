import React from 'react';
import {Link} from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './style.scss';

const Home = () => (
    <div className="home">
        <h1 className="home-title" id="first-title">Hello, je suis <span className="home-name">Aurélie</span>,</h1>
        <h1 className="home-title">développeuse web Front-End</h1>

        <div className="button-container">
            <Link to="/parcours">
                <button type="submit" disabled="" className="contact-button" id="home-button">
                        <span className="button-text" >
                            Par ici 
                            <ChevronRightIcon id="arrow-button"/>
                        </span>
                </button>
            </Link>
        </div>
    </div>
)

export default Home;
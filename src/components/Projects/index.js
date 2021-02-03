import React from 'react';
import {Link} from 'react-router-dom';
import jeu from './jeu.png';
import family from './family.png';
import travel from './travel.png';
import converter from './converter.png';


import './style.scss';

const Projects = () => (
    <div className="projects">
        <div className="project">
            <a href="https://github.com/auretho/my-travel-road-FRONT/">
                <h2 className="project-title">My Travel Road</h2>
            <p className="project-description">Site web à destination des grands voyageurs permettant de tracer un itinéraire lors d'un voyage autour du monde.</p>
                <img src={travel} alt="site de voyage" className="project-image" />
            </a>
        </div>
        <div className="project">
            <a href="http://temps-perdu.surge.sh">
                <h2 className="project-title">A la recherche du temps perdu</h2>
            <p className="project-description">Jeu vidéo d'aventure, réalisé en 2017 grâce à RPG Maker MV. Développé pour ordinateur et mobile Android. Durée totale: environ 50mn.</p>
                <img src={jeu} alt="extrait jeu vidéo" className="project-image" />
            </a>
       </div>
       <div className="project one">
            <Link to ="/error">
                <h2 className="project-title">Family time</h2>
                <p className="project-description">
                Application de connexion inter-familiale pour garder le lien avec toute la famille.<br></br>
                <span className="project-construction">En construction!</span></p>
                    <img src={family} alt="extrait jeu vidéo" className="project-image" />
            </Link>
       </div>
       <div className="project">
            <a href="http://moneyXchange.surge.sh">
                <h2 className="project-title">Convertisseur</h2>
            <p className="project-description">Convertisseur de devises</p>
                <img src={converter} alt="convertisseur" className="project-image" />
            </a>
       </div>


       
    </div>
)

export default Projects;
import React from 'react';
import {Link} from 'react-router-dom';
import jeu from './jeu.png';
import family from './family.png';
import travel from './travel.png';


import './style.scss';

const Projects = () => (
    <div className="projects">
       <div className="project">
           <h2 className="project-title">A la recherche du temps perdu</h2>
           <p className="project-description">Jeu vidéo d'aventure, réalisé grâce à RPG Maker MV. Développé pour ordinateur et mobile Android.</p>
           <a href="http://temps-perdu.surge.sh">
                <img src={jeu} alt="extrait jeu vidéo" className="project-image" />
           </a>
       </div>
       <div className="project">
           <h2 className="project-title">My Travel Road</h2>
           <p className="project-description">Site web à destination des grands voyageurs permettant de tracer un itinéraire lors d'un voyage autour du monde.</p>
           <a href="https://github.com/auretho/my-travel-road-FRONT/">
                <img src={travel} alt="site de voyage" className="project-image" />
           </a>
       </div>
       <div className="project">
           <h2 className="project-title">Family time</h2>
           <p className="project-description">
               Application de connexion inter-familiale pour garder le lien avec toute la famille.<br></br>
               <span className="project-construction">En construction!</span></p>
           <Link to ="/error">
                <img src={family} alt="extrait jeu vidéo" className="project-image" />
           </Link>
       </div>
    </div>
)

export default Projects;
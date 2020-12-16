import React from 'react';
import jeu from './jeu.png';
import './style.scss';

const Projects = () => (
    <div className="projects">
       <div className="project">
           <h2 className="project-title">A la recherche du temps perdu</h2>
           <p className="project-description">Jeu vidéo d'aventure, réalisé grâce à RPG Maker MV</p>
           <a href="http://temps-perdu.surge.sh">
                <img src={jeu} alt="extrait jeu vidéo" className="project-image" />
           </a>
       </div>
    </div>
)

export default Projects;
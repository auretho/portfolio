import React from 'react';
// import {Link} from 'react-router-dom';
import jeu from './jeu.png';
// import family from './family.png';
import travel from './travel.png';
import converter from './converter.png';
import puzzle from './puzzle.png';
import nonnam from './nonnam.png';


import './style.scss';

const Projects = () => (
    
    <div className="projects">
        <div className="project">
            <a href="https://nonna-m.surge.sh">
                <h2 className="project-title">Nonna M</h2>
                <p className="project-description">Création du logo Nonna M ainsi que du site complet et du backoffice permettant la gestion de produits et de photos</p>
                <p className="project-description"><span>Technos: </span>React, Redux, Axios, Node.js, MongoDb, Photoshop</p>
                <img src={nonnam} alt="nonna M" className="project-image" />
            </a>
       </div>
       <div className="project">
            <a href="http://puzzle.aurelie-thouzeau.me">
                <h2 className="project-title">Puzzle game</h2>
                <p className="project-description">Jeu de réflexion et de logique créé dans un délai de 48 heures qui comporte 10 niveaux</p>
                <p className="project-description"><span>Technos: </span>React, Redux</p>
                <img src={puzzle} alt="puzzle game" className="project-image" />
            </a>
       </div>
        <div className="project">
            <a href="https://temps-perdu.surge.sh">
                <h2 className="project-title">A la recherche du temps perdu</h2>
                <p className="project-description">Jeu vidéo d'aventure développé pour ordinateur et mobile Android. Durée totale de jeu: environ 50 à 60 minutes.</p>
                <p className="project-description"><span>Techno: </span>Rpg Maker MV</p>
                <img src={jeu} alt="extrait jeu vidéo" className="project-image" />
            </a>
       </div>
       <div className="project">
            <a href="https://moneyXchange.surge.sh">
                <h2 className="project-title">Convertisseur</h2>
                <p className="project-description">Convertisseur d'euro en devises internationales avec filtrage possible de la liste des devises</p>
                <p className="project-description"><span>Techno: </span>React</p>
                <img src={converter} alt="convertisseur" className="project-image" />
            </a>
       </div>
        <div className="project">
            <a href="https://github.com/auretho/my-travel-road-FRONT/">
                <h2 className="project-title">My Travel Road</h2>
                <p className="project-description">Site web à destination des grands voyageurs permettant de tracer un itinéraire lors d'un voyage autour du monde.</p>
                <p className="project-description"><span>Technos: </span>React, Redux, Axios, Symfony</p>
                <img src={travel} alt="site de voyage" className="project-image" />
            </a>
        </div>
       {/* <div className="project one">
            <Link to ="/error">
                <h2 className="project-title">Family time</h2>
                <p className="project-description">
                Application de connexion inter-familiale pour garder le lien avec toute la famille. <span className="project-construction">En construction!</span></p>
                <p className="project-description"><span>Techno utilisées: </span>React, Redux, Axios, NodeJs, MongoDb</p>
                <img src={family} alt="extrait jeu vidéo" className="project-image" />
            </Link>
       </div> */}


       
    </div>
)

export default Projects;
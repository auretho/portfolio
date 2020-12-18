import React from 'react';
import Timeline from './timeline';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

import './style.scss';

const Career = ({careerData}) => (
    <div className="career">
        <div className="career-head">
            <h2 className="career-title">Parcours</h2>
            <p className="career-intro">Anciennement responsable évènementiel et passionnée d’informatique, j’ai commencé à coder et à créer mes propres jeux vidéo en autodidacte pour finalement me décider à me lancer dans une reconversion professionnelle et devenir développeuse web et qui sait un jour, bosser sur un projet de jeu vidéo! <VideogameAssetIcon fontSize="large"/></p>
            
        </div>
        <div className="career-description">
            <Timeline careerData={careerData}/>
        </div>
    </div>
)

export default Career;
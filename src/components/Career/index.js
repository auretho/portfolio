import React from 'react';
import Timeline from './timeline';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

import './style.scss';

const Career = ({careerData}) => (
    <div className="career">
        <div className="career-head">
            <h2 className="career-title">Parcours professionnel</h2>
            <div className="career-intro">
                <p>Anciennement responsable dans l'évènementiel et <span>passionnée d’informatique</span>, j’ai commencé à coder et à créer <span>mes propres sites et jeux vidéo</span> en autodidacte pour finalement me lancer dans une reconversion professionnelle.</p> 
                <br/>
             <VideogameAssetIcon fontSize="large" />
                <br/>

            </div>
        </div>
        <div className="career-description">
            <Timeline careerData={careerData}/>
        </div>
    </div>
)

export default Career;
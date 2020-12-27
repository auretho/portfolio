import React from 'react';
import Timeline from './timeline';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

import './style.scss';

const Career = ({careerData}) => (
    <div className="career">
        <div className="career-head">
            <h2 className="career-title">Parcours</h2>
            <div className="career-intro">
                <p>Anciennement responsable dans l'évènementiel et <span>passionnée d’informatique</span>, j’ai commencé à coder et à créer <span>mes propres sites et jeux vidéo</span> en autodidacte pour finalement me lancer dans une reconversion professionnelle.</p> 
                <p>Si grâce à l'école O'Clock j'ai pu suivre une formation de développement web, je souhaite désormais à travers ce portfolio susciter un <span>intérêt professionnel chez certains d'entre vous</span> et pouvoir enfin me lancer dans cette <span>nouvelle carrière</span>. </p> 
                <br/>
                <span>J'attends de vos nouvelles!</span>
             <VideogameAssetIcon fontSize="large" />
            </div>
        </div>
        <div className="career-description">
            <Timeline careerData={careerData}/>
        </div>
    </div>
)

export default Career;
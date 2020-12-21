import React from 'react';
import Timeline from './timeline';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

import './style.scss';

const Career = ({careerData}) => (
    <div className="career">
        <div className="career-head">
            <h2 className="career-title">Parcours</h2>
            <p className="career-intro">Anciennement responsable dans l'évènementiel et passionnée d’informatique, j’ai commencé à coder et à créer mes propres sites et jeux vidéo en autodidacte pour finalement me lancer dans une reconversion professionnelle. Si grâce à l'école O'Clock j'ai pu suivre une formation de développeuse web, je souhaite désormais à travers ce portfolio susciter un intérêt professionnel chez certains d'entre vous pour consolider mes connaissances par une expérience reconnue. J'attends de vos nouvelles!
            
            
             <VideogameAssetIcon fontSize="large"/></p>
            
        </div>
        <div className="career-description">
            <Timeline careerData={careerData}/>
        </div>
    </div>
)

export default Career;
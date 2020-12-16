import React from 'react';
import Timeline from './timeline';

import './style.scss';

const Career = () => (
    <div className="career">
        <div className="career-head">
            <h2 className="career-title">Parcours</h2>
            <p className="career-intro">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam veniam quisquam ab iusto voluptatibus, nulla architecto maiores sed! Nisi id aliquid atque quod quidem voluptates deleniti iure accusantium, nobis amet impedit nostrum placeat molestias, modi rem quia voluptatibus iste sed maxime? Illum molestias dolorem corporis dolorum, inventore perspiciatis laudantium accusantium.</p>
        </div>
        <div className="career-description">
            <Timeline />
        </div>
    </div>
)

export default Career;
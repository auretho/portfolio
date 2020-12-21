import React from 'react';
import space from './space.png';

import './style.scss';

const Error = () => (
    <div className="error">
        <p className="error-text">
            Oups voilà qui n'était pas prévu! 
            <br></br>
            Erreur 404 - page non trouvée :)
        </p>
        <a href="/">
        <img src={space} alt="astronaute" className="astronaut"/>
        </a>
    </div>
)

export default Error;
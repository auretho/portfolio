import React from 'react';
import Typical from 'react-typical'

import './style.scss';

const Error = () => (
    <div className="error">
        <Typical
        steps={[
            "Oups voilà qui n'était pas prévu!", 2000,
            `Oups voilà qui n'était pas prévu! Erreur 404 - page non trouvée `, 1500,
            "Oups voilà qui n'était pas prévu! Erreur 404 - page non trouvée :)", 500
        ]}
        loop={false}
        wrapper="p"
        className="error-text"
      />
    </div>
)

export default Error;
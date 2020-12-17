import React from 'react';
import Hexagon from 'react-hexagon';
import html from './img/html.png';
import css from './img/css.png';
import javascript from './img/javascript.png';
import php from './img/php.png';
import react from './img/react.png';
import redux from './img/redux.png';
import node from './img/node.png';
import sass from './img/sass.png';
import mongodb from './img/mongodb.png';
import MySQL from './img/MySQL.png';
import git from './img/git.png';

import './style.scss';

const Skills = () => (
    <div className="skills">
        <div className="hexagon-row">
            <Hexagon
                className="hexagon"
                style={{stroke: 'rgba(255, 255, 255, 0.295)'}}
                backgroundImage={html}
                backgroundScale={1.05}
            />
            <Hexagon
                className="hexagon"
                style={{stroke: 'rgba(255, 255, 255, 0.295)'}}
                backgroundImage={css}
                backgroundScale={1.05}
            />
            <Hexagon
                className="hexagon"
                style={{stroke: 'rgba(255, 255, 255, 0.295)'}}
                backgroundImage={javascript}
                backgroundScale={1.05}
            />
            <Hexagon
                className="hexagon"
                style={{stroke: 'rgba(255, 255, 255, 0.295)'}}
                backgroundImage={php}
                backgroundScale={1.05}
            />
        </div>
        <div className="hexagon-row">
            <Hexagon
                className="hexagon"
                style={{stroke: 'rgba(255, 255, 255, 0.295)'}}
                backgroundImage={react}
                backgroundScale={1.05}
            />
            <Hexagon
                className="hexagon"
                style={{stroke: 'rgba(255, 255, 255, 0.295)'}}
                backgroundImage={redux}
                backgroundScale={1.05}

            />
            <Hexagon
                className="hexagon"
                style={{stroke: 'rgba(255, 255, 255, 0.295)'}}
                backgroundImage={node}
                backgroundScale={1.05}
            />
        </div>
        <div className="hexagon-row">
            <Hexagon
                className="hexagon"
                style={{stroke: 'rgba(255, 255, 255, 0.295)'}}
                backgroundImage={sass}
                backgroundScale={1.05}

            />
            <Hexagon
                className="hexagon"
                style={{stroke: 'rgba(255, 255, 255, 0.295)'}}
                backgroundImage={mongodb}
                backgroundScale={1.05}

            />
            <Hexagon
                className="hexagon"
                style={{stroke: 'rgba(255, 255, 255, 0.295)'}}
                backgroundImage={MySQL}
                backgroundScale={1.05}

            />
            <Hexagon
                className="hexagon"
                style={{stroke: 'rgba(255, 255, 255, 0.295)'}}
                backgroundImage={git}
                backgroundScale={1.05}

            />
        </div>
    </div>
)


export default Skills;
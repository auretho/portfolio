import React, { useState } from 'react';
import Hexagon from 'react-hexagon';
import './style.scss';

const Skills = ({icons}) => {
 
    const [text, setText] = useState(false);

    const handleIconClick = (evt) => {
        const bgId = evt.target.previousSibling.lastChild.id;
        if( evt.currentTarget.style.fill !== "rgb(255, 255, 255)"){
            evt.currentTarget.style.fill = "rgb(255, 255, 255)";
        }
        else{
            evt.currentTarget.style.fill = `url("#${bgId}")`;
        }

        // if(text){
        //     setText(!text)
        // }
        // else{
        //     setText(!text)
        // }
        console.log(evt)
    }

    return(
    <div className="skills">
        <div className="hexagon-row">
            { icons.map((iconObject) => (
                iconObject.row1.map((icon, index) => {
                    return (
                    <div key={index} >
                        <Hexagon
                            className={text ? " hexagon hexagon-wesh" : "hexagon" }
                            style={{ stroke: 'rgba(255, 255, 255, 0.295)' }}
                            backgroundImage={icon.path}
                            backgroundScale={1.05}
                            onClick={handleIconClick}
                        >
                            <text className={text ? "hexagon-text" : "hexagon-text-hidden"} x="50%" y="60%">REACT</text>
                        </Hexagon>
                    </div>
                )})
            ))
            }
        </div>
        <div className="hexagon-row">
            { icons.map((iconObject) => (
                iconObject.row2.map((icon, index) => (
                    <Hexagon
                        key={index}
                        className="hexagon"
                        style={{stroke: 'rgba(255, 255, 255, 0.295)'}}
                        backgroundImage={icon.path}
                        backgroundScale={1.05}
                    />
                ))
            ))
            }
        </div>
        <div className="hexagon-row">
            { icons.map((iconObject) => (
                iconObject.row3.map((icon, index) => (
                    <Hexagon
                        key={index}
                        className="hexagon"
                        style={{stroke: 'rgba(255, 255, 255, 0.295)'}}
                        backgroundImage={icon.path}
                        backgroundScale={1.05}
                    />
                ))
            ))
            }
        </div>
    </div>
    )}


export default Skills;
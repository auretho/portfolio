import React from 'react';
import Hexagon from 'react-hexagon';
import './style.scss';

const Skills = ({icons}) => {
 
    const handleIconClick = (evt) => {
        const bgId = evt.target.previousSibling.lastChild.id;
        // const hexaClass = evt.target.viewportElement.children[2].className.baseVal
        console.log(evt)
        if( evt.target.style.fill !== "rgba(255, 255, 255, 0.2)"){
            evt.target.style.fill = "rgba(255, 255, 255, 0.2)";
            evt.target.viewportElement.children[2].className.baseVal = "hexagon-text";
        }
        else{
            evt.target.style.fill = `url("#${bgId}")`;
            evt.target.viewportElement.children[2].className.baseVal = "hexagon-text-hidden ";
        }
    }

    return(
    <div className="skills">
        <div className="hexagons">
            <div className="hexagon-row">
                { icons.map((iconObject) => (
                    iconObject.row1.map((icon, index) => {
                        return (
                        <div key={index} >
                            <Hexagon
                                className="hexagon"
                                style={{ stroke: 'rgba(255, 255, 255, 0.295)' }}
                                backgroundImage={icon.path}
                                backgroundScale={1.05}
                                onClick={handleIconClick}
                            >
                                <text 
                                    className="hexagon-text-hidden" 
                                    x="50%" 
                                    y="55%"
                                >
                                    {icon.description}
                                </text>
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
                            onClick={handleIconClick}
                        >
                            <text 
                                className="hexagon-text-hidden" 
                                x="50%" 
                                y="55%"
                            >
                                {icon.description}
                            </text>
                        </Hexagon>
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
                            onClick={handleIconClick}
                            >
                            <text 
                                className="hexagon-text-hidden" 
                                x="50%" 
                                y="55%"
                            >
                                {icon.description}
                            </text>
                        </Hexagon>
                    ))
                ))
                }
            </div>
        </div>
    </div>
    )}


export default Skills;
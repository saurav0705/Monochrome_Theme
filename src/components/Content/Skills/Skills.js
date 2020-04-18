import React from 'react';
import './Skills.css';
import {FaSuitcase} from 'react-icons/fa';
import {getFormatedDate} from '../../assets/effects';
const Skills = (props) => {
    return (<div id="skills" className="content-containers background-black" >
        <div className="skills color-white">
            <div className="title-text margin-top-center">my Skills</div>
            <div className="skills-content">
                <div className="experiances">
                    <div className="sub-heading ">Experiance</div>
                    <div className="experiance-container">
                        {props.experiance.map(exp => {return(
                            <div className="experiance-card">
                            <div className="experiance-icon">
                            <FaSuitcase/>
                            </div>
                            <div className="experiance-info">
                            <div className="experiance-organization">{exp.name}</div>
                            <div className="experiance-title">{exp.designation}</div>
                            <div className="experiance-start">{getFormatedDate(exp.start)} {exp.ongoing ?" - Present":null}</div>
                            <div className="experiance-end">{getFormatedDate(exp.end)}</div>
                            </div>
                        </div>
                        )})}
                
                    </div>

                </div>
                <div className="skills-text">
                    <div className="sub-heading ">skills</div>
                    <div className="skills-container">
                        {props.skills.map(skill => {return(
                            <div className="skill-tile">{skill}</div>
                        )})}
                    </div>
                </div>

                <div className="skills-text">
                    <div className="sub-heading ">hobbies</div>
                    <div className="skills-container">
                        {props.hobbies.map(hobby => {return(
                                <div className="skill-tile">{hobby}</div>
                            )})}
                    </div>
                </div>

            </div>
        </div>

    </div>)
};

export default Skills;
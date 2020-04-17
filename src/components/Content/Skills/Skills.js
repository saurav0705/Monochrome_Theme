import React from 'react';
import './Skills.css';
import {FaSuitcase} from 'react-icons/fa';
const Skills = () => {
    return (<div className="content-containers background-black" >
        <div className="skills color-white">
            <div className="title-text margin-top-center">Skills</div>
            <div className="skills-content">
                <div className="experiances">
                    <div className="sub-heading ">Experiance</div>
                    <div className="experiance-container">
                    <div className="experiance-card">
                        <div className="experiance-icon">
                        <FaSuitcase/>
                        </div>
                        <div className="experiance-info">
                        <div className="experiance-organization">Calsoft</div>
                        <div className="experiance-title">intern</div>
                        <div className="experiance-start">may 2019</div>
                        <div className="experiance-end">july 2020</div>
                        </div>
                    </div>
                    <div className="experiance-card">
                        <div className="experiance-icon">
                        <FaSuitcase/>
                        </div>
                        <div className="experiance-info">
                        <div className="experiance-organization">Calsoft</div>
                        <div className="experiance-title">intern</div>
                        <div className="experiance-start">may 2019</div>
                        <div className="experiance-end">july 2020</div>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="skills-text">
                    <div className="sub-heading ">skills</div>
                    <div className="skills-container">
                        <div className="skill-tile">python</div>
                        <div className="skill-tile">django</div>
                        <div className="skill-tile">nodejs</div>
                        <div className="skill-tile">scala</div>
                    </div>
                </div>

            </div>
        </div>

    </div>)
};

export default Skills;
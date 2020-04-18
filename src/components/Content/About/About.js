import React from 'react';
import './About.css';
import {FaGraduationCap} from 'react-icons/fa';
import {GiDiploma} from 'react-icons/gi';
import {getFormatedDate} from '../../assets/effects';
const About = (props) => {

    
    return(<div id="about" className="content-containers background-non-black">
        <div className="about">
            <div className="title-text heading">About Me</div>
            <div>{props.description}</div>
            <div className="sub-heading">education</div>
            <div className="education-grid">
                {props.education.map(edu => {return(
                    <div className="education-card">
                    <div className="education-icon">
                        <FaGraduationCap/>
                    </div>
                    <div className="education-info">
                    <div>{edu.name}</div>
                    <div>{edu.designation}</div>
                    <div>{getFormatedDate(edu.start)}  {edu.ongoing ? " - Present":""}</div>
                    <div>{getFormatedDate(edu.end)}</div>
                    </div>
                </div>
                )})}
            </div>

            <div className="sub-heading">Achivements & Certifications</div>
            <div className="education-grid">

                {props.achievements.map(ach => {return(
                    <div className="education-card">
                    <div className="education-icon">
                        <GiDiploma/>
                    </div>
                    <div className="education-info">
                    <div>{ach.title}</div>
                    {ach.url.length !==0 ?
                    <div className="url" onClick={()=>window.open(ach.url)}>Visit</div>:null}
                    </div>
                </div>
                )})}
            
                </div>
            
        </div>

    </div>)
}

export default About;
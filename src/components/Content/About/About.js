import React from 'react';
import './About.css';
import {FaGraduationCap} from 'react-icons/fa';
const About = () => {
    return(<div className="content-containers background-non-black">
        <div className="about">
            <div className="title-text heading">About Me</div>
            <div>Irure proident laboris nisi amet enim veniam tempor est tempor. Sit consectetur enim dolore officia fugiat nisi eu consectetur tempor proident esse cupidatat. Nostrud sunt exercitation id voluptate ex dolor adipisicing. Non nisi adipisicing eu qui eiusmod sunt irure eu consequat enim aute consequat consequat ullamco. In nulla sint mollit do amet exercitation sit eiusmod mollit ullamco excepteur fugiat eu. Anim eu dolor ea minim.
            <div className="sub-heading">education</div>
            <div className="education-grid">
                <div className="education-card">
                    <div className="education-icon">
                        <FaGraduationCap/>
                    </div>
                    <div className="education-info">
                    <div>Chitkara University</div>
                    <div>Computer Science</div>
                    <div>may 2016</div>
                    <div>may 2020</div>
                    </div>
                </div>
            </div>
            </div>
        </div>

    </div>)
}

export default About;
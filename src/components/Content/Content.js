import React from 'react';
import './Content.css';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Works from './Works/Works';
import Contact from './Contact/Contact';

const Content = ({data}) => {
    return(<>
        <Home name={data.name} tagline={data.tagline}/>
        <About description={data.description} education={data.education} achievements={data.achievements}/>
        <Skills experiance={data.experiance} skills={data.skills} hobbies={data.hobbies}/>
        <Works projects={data.projects}/>
        <Contact contacts={data.contact} social={data.social} image={data.displayImage}/>
        </>
    )
};

export default Content;
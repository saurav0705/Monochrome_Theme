import React from 'react';
import './Content.css';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Works from './Works/Works';

const Content = () => {
    return(<>
        <Home/>
        <About/>
        <Skills/>
        <Works/>
        </>
    )
};

export default Content;
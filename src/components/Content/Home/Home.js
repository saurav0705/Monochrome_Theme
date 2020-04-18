import React from 'react';
import './Home.css';

import {parrallax} from '../../assets/effects';

const Home = (props) => {
    return(
        <div id="home" className="content-containers parralax" style={parrallax}>
            <div className="home">
                <div className="home-name">{props.name}</div>
                <div className="home-tagline">{props.tagline}</div>
            </div>
        </div>
    )
};

export default Home;
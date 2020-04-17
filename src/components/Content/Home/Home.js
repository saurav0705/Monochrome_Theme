import React from 'react';
import './Home.css';

import {parrallax} from '../../assets/effects';

const Home = () => {
    return(
        <div className="content-containers parralax" style={parrallax}>
            <div className="home">
                <div className="home-name">Jane Doe</div>
                <div className="home-tagline">Tagline</div>
            </div>
        </div>
    )
};

export default Home;
import React, { useState } from 'react';
import './Works.css';
import WorkDetail from './WorkDetail/WorkDetail';
const Works = () => {
    const [open,setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }
    return(
        <div className="content-containers background-non-black">
            <div className="works">
                <div className="title-text margin-top-center">works</div>
                <div className="works-container">
                    <div className="work-tile" onClick={()=>toggle()}>project 1</div>
                    <div className="work-tile">project 2</div>
                    <div className="work-tile">project 3</div>
                    <div className="work-tile">project 4</div>
                    <div className="work-tile">project 5</div>
                    <div className="work-tile">project 6</div>
                    <div className="work-tile">project 7</div>
                </div>
            </div>
            {open?
            <WorkDetail toggle={()=>toggle()}/>:null}

        </div>
    )
};

export default Works;
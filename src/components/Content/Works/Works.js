import React, { useState } from 'react';
import './Works.css';
import WorkDetail from './WorkDetail/WorkDetail';
const Works = (props) => {
    const [open,setOpen] = useState(false);
    const [project,setProject] = useState({});

    const toggle = () => {
        setOpen(!open);
    }
    return(
        <div id="works" className="content-containers background-non-black">
            <div className="works">
                <div className="title-text margin-top-center">my works</div>
                <div className="works-container">
                    {props.projects.map(project => {return(
                        <div className="work-tile" key={project._id} onClick={()=>{setProject({...project});toggle()}}>{project.name}</div>
                    )}) }
                    
                </div>
            </div>
            {open?
            <WorkDetail data={project} toggle={()=>toggle()}/>:null}

        </div>
    )
};

export default Works;
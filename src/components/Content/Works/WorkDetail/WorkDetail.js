import React from 'react';
import './WorkDetail.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import {IoIosTime} from 'react-icons/io';
const WorkDetail = ({toggle}) => {
    return(
        <div className="work-detail-container">
            <div className="work-detail-content">
            <div className="title-text exit" onClick={()=>{toggle()}}><AiFillCloseCircle/></div>
            <div className="title-text uppercase">Project 1</div>
            <div className="work-detail-description">Nisi velit eiusmod minim reprehenderit reprehenderit velit fugiat ipsum ad ipsum quis nulla pariatur voluptate. Elit enim quis fugiat eiusmod consectetur veniam. Qui ut nostrud ut elit adipisicing. Est officia ad ad adipisicing fugiat velit proident. Dolore reprehenderit ut cillum quis incididunt culpa aliquip commodo irure aliqua qui. Reprehenderit eu commodo ipsum sint magna id minim fugiat incididunt occaecat.</div>
            <div className="work-detail-time">Started <IoIosTime/> may 2019</div>
            <div className="work-detail-time">Ended <IoIosTime/> may 2020</div>
            <div className="work-detail-url">go to project</div>
            </div>
        </div>
    )
};


export default WorkDetail;
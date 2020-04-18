import React from 'react';
import './WorkDetail.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import {IoIosTime} from 'react-icons/io';
import {getFormatedDate} from '../../../assets/effects';
const WorkDetail = ({toggle,data}) => {
    return(
        <div className="work-detail-container">
            <div className="work-detail-content">
            <div className="title-text exit" onClick={()=>{toggle()}}><AiFillCloseCircle/></div>
            <div className="title-text uppercase">{data.name}</div>
            <div className="work-detail-description">{data.description}</div>
            <div className="work-detail-time">Started <IoIosTime/> {getFormatedDate(data.start)}{data.ongoing ? " - Present":null}</div>
            {data.end !== null && data.end.length !== 0  ?<div className="work-detail-time">Ended <IoIosTime/> {getFormatedDate(data.end)}</div>:null}
            {data.url.length !==0 ?<div className="work-detail-url" onClick={()=>window.open(data.url)}>go to project</div>:null}
            </div>
        </div>
    )
};


export default WorkDetail;
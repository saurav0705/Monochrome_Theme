import React from 'react';
import './Contact.css';
import {FaGithubSquare,FaPhone,FaFacebookSquare,FaLinkedin,FaSnapchatSquare,FaInstagram,FaTwitterSquare} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

const Contact = (props) => {
    const icon = (key) => {
        switch(key.toUpperCase()){
            case 'EMAIL' : return <MdEmail/>
            case 'FACEBOOK': return <FaFacebookSquare/>
            case 'TWITTER' : return <FaTwitterSquare/>
            case 'LINKEDIN' : return <FaLinkedin/>
            case 'SNAPCHAT' : return <FaSnapchatSquare/>
            case 'INSTAGRAM' : return <FaInstagram/>
            case 'GITHUB' : return <FaGithubSquare/>
            default : return 'none'; 
        }

    }

    return(
        <div id="contact" className="content-containers background-black">
            <div className="contact">
                <div className="title-text">Contact Me</div>
                <div className="contact-container">
                    <div className="contact-all contents">
                    <div className="contact-image-container">
                <img className="contact-image" src={props.image} alt="contact"/>
                </div>
                <div className="contact-numbers">
                    {props.contacts.map(contact => {return(
                        <div className="number-tile" onClick={()=>window.parent.location.href = "tel:"+contact}> <FaPhone/> {contact} </div>
                    )})}
                    
                </div>
                <div className="contact-info-container">
                {
                            Object.keys(props.social).filter(social => props.social[social].length !== 0).map(social => {
                                return (<div key={social} className={"contact-tile "+social} onClick={()=>window.open(social === 'email' ? "mailto:"+props.social[social]:props.social[social])}>{icon(social.toUpperCase())}</div>)
                            })
                        }
                </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;
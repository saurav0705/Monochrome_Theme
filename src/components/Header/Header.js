import React, { useState, useEffect } from 'react';
import './Header.css';
import {GiHamburgerMenu} from 'react-icons/gi';
const Header = () => {
    const [open,setOpen] = useState(false);
    const [width,setWidth] = useState(false);
    const [selected,setSelected] = useState('Home');
    useEffect(()=>{
        setWidth(window.screen.availWidth > 600);
        window.addEventListener('resize',()=>{
            setWidth(window.screen.availWidth > 600);
        })
    },[])

    const toggle = () => {
        setOpen(!open);
    }
    const navClick = (value) => {
        setSelected(value);
        toggle();

    }
    return(
        <div className="header">
        <div className="header-container">
            <div className="small-screen">
                <div>{selected}</div>
                <div onClick={()=> toggle()}><GiHamburgerMenu/></div>
            </div>
            {open || width ?<>
            <div className="header-tile" onClick={()=>navClick('Home')}>Home</div>
            <div className="header-tile" onClick={()=>navClick('About')}>About</div>
            <div className="header-tile" onClick={()=>navClick('Skills')}>Skills</div>
            <div className="header-tile" onClick={()=>navClick('Works')}>Works</div>
            <div className="header-tile" onClick={()=>navClick('Contact')}>Contact</div></>:null}
        </div>
        </div>
    )
};


export default Header;
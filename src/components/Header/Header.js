import React, { useState, useEffect } from 'react';
import './Header.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoIosHome} from 'react-icons/io';
const Header = () => {
    const [open,setOpen] = useState(false);
    const [width,setWidth] = useState(false);
    const [scroll,setScroll] = useState(false);
    const [selected,setSelected] = useState('home');
    const scrollToComponent = (id) => {

         let scrollDiv = document.getElementById(id).offsetTop;
         window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
         if(open){
         toggle();}
     }
     const changeActive = (val,height) => {
        // height = height*0.7;
        try{
        let home_height = document.getElementById('home').offsetHeight;
        let home_top = document.getElementById('home').offsetTop;


        let about_height = document.getElementById('about').offsetHeight;
        let about_top = document.getElementById('about').offsetTop;

        let skills_height = document.getElementById('skills').offsetHeight;
        let skills_top = document.getElementById('skills').offsetTop;

        let works_height = document.getElementById('works').offsetHeight;
        let works_top = document.getElementById('works').offsetTop;

        let contact_height = document.getElementById('contact').offsetHeight;
        let contact_top = document.getElementById('contact').offsetTop;
        

        if(val>=  home_top && val< (home_top+home_height)){
            setSelected('home');
            return;
        }

        if(val>=  about_top && val< (about_top+about_height)){
            setSelected('about');
            return;
        }

        if(val>=  skills_top && val< (skills_top+skills_height)){
            setSelected('skills');
            return;
        }

        if(val>=  works_top && val< (works_top+works_height)){
            setSelected('works');
            return;
        }

        if(val>=  contact_top && val< (contact_top+contact_height)){
            setSelected('contact');
            return;
        }
    }
    catch(err){
        console.log(err)
    }
        
        
        
    }

    useEffect(()=>{
        setTimeout(()=>{console.log("$$$$$$$$$$$$$$$");scrollToComponent('home')},500);
        setWidth(window.screen.availWidth > 600);
        window.addEventListener('resize',()=>{
            setWidth(window.screen.availWidth > 600);
        })

        document.addEventListener("scroll", () => {
            const scrolled = window.scrollY < 70 ? false : true;
            setScroll(scrolled);
            changeActive(window.pageYOffset,window.screen.availHeight);
          });
        
          
    },[])

    const toggle = () => {
        setOpen(!open);
    }
    const navClick = (value) => {
        setSelected(value);
        scrollToComponent(value);
        setOpen(false);

    }
    return(
        <div className="header">
        <div className={!scroll ? "header-container" : "header-container background-change"}>
            <div className={scroll ? "small-screen non-black":"small-screen"}>
                <div onClick={()=>navClick('home')}><IoIosHome/>  {selected}</div>
                <div onClick={()=> toggle()}><GiHamburgerMenu/></div>
            </div>
            {open || width ?<>
            <div className={!width ? "header-tile background-black":"header-tile"} onClick={()=>navClick('home')}><span className={selected==='home'?"color-yellow":""}>Home</span></div>
            <div className={!width ? "header-tile background-black":"header-tile"} onClick={()=>navClick('about')}><span className={selected==='about'?"color-yellow":""}>About</span></div>
            <div className={!width ? "header-tile background-black":"header-tile"} onClick={()=>navClick('skills')}><span className={selected==='skills'?"color-yellow":""}>Skills</span></div>
            <div className={!width ? "header-tile background-black":"header-tile"} onClick={()=>navClick('works')}><span className={selected==='works'?"color-yellow":""}>Works</span></div>
            <div className={!width ? "header-tile background-black":"header-tile"} onClick={()=>navClick('contact')}><span className={selected==='contact'?"color-yellow":""}>Contact</span></div></>:null}
        </div>
        </div>
    )
};


export default Header;
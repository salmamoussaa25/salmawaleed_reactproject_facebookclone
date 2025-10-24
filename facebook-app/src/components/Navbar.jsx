import React, { Component } from 'react';
import "./Navbar.css"
import fscebookicon from '../assets/fscebookicon.png'
import homeicon from '../assets/homeicon.png'
const NavBar = () => {
    return ( 
        <div className='navBar'>
            <img src={fscebookicon} alt="facebook_icon" />
            <div className='homeCont'>
                <img src={homeicon} alt="home_icon" className='homeIcon' />
                <img src={homeicon} alt="home_icon" className='homeIcon' />
                <img src={homeicon} alt="home_icon" className='homeIcon' />
                <img src={homeicon} alt="home_icon" className='homeIcon' />
            </div>

        </div>
     );
}
 
export default NavBar;
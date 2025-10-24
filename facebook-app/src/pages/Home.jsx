import React, { Component } from 'react';
import "./Home.css"
import Button from '../components/Button';
import NavBar from '../components/Navbar';
const index = () => {
    return ( 
    <div>
        <NavBar />
        <div className='bottomHalfPage'>
            <div className='sideBarRight'>
                <Button title="Share"/> 
            </div>
        </div>
    </div> );
}
 
export default index;
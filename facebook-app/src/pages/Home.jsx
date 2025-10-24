import React from 'react';
import "./Home.css"
import Button from '../components/Button';
import NavBar from '../components/Navbar';
import Watch from '../components/Watch';
const index = () => {
    return ( 
    <div>
        <NavBar />
        <div className='bottomHalfPage'>
            <div className='sideBarRight'>
                <Button title="Share"/> 
                <div className='watchComponents'>
                    <Watch />
                    <Watch />
                    <Watch />
                    <Watch />
                </div>
            </div>
        </div>
    </div> );
}
 
export default index;
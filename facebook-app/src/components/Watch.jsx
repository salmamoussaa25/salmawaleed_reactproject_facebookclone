import React from 'react';
import "./Watch.css"
import watchicon from "../assets/watchicon.png"

const Watch = () => {
    return ( 
        <div className='watchDiv'>
            <img src={watchicon} alt="live_watch_icon" className='watchIcon' />
            <p>Watch</p>
        </div>
     );
}
 
export default Watch;
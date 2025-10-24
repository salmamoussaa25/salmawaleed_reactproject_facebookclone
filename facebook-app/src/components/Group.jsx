import React from 'react';
import "./Group.css"
import groupicon from "../assets/groupicon.png"

const Group = () => {
    return ( 
        <div className='groupChat'>
            <img src={groupicon} alt="groupchat_icon" />
            <p className='groupText'>UX/UI Designers & Developers</p>
        </div>
     );
}
 
export default Group;
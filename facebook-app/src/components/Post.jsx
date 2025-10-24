import React from 'react';
import "./Post.css"
import createpostpfp from "../assets/createpostpfp.png"
import videoicon from "../assets/videoicon.png"
import photoicon from "../assets/photoicon.png"
import feelingicon from "../assets/feelingicon.png"

const Post = () => {
    return ( 
        <div className='postCont'>
            <div className='createSection'>
            <img src={createpostpfp} alt="user_pfp" />
            <div className='postTextInput'>
                <p>What's on your mind, Jenny</p>  
            </div>
            </div>
            <hr />
            <div className='contentOptionsCont'>
                <div className='contentOption'>
                    <img src={videoicon} alt="" />
                    <p>Live Video</p>
                </div>
                <div className='contentOption'>
                    <img src={photoicon} alt="" />
                    <p>Photo/Video</p>
                </div>
                <div className='contentOption'>
                    <img src={feelingicon} alt="" />
                    <p>Feeling/activity</p>
                </div>
            </div>
        </div>
     );
}
 
export default Post;
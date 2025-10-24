import React from 'react';
import "./StoryReel.css"
import storyimage from "../assets/storyimage.png"
import storyuserpfp from "../assets/storyuserpfp.png"

const StoryReel = () => {
    return ( 
        <div className='storyReelCont'>
            <img src={storyimage} alt="story_thumbnail" />
            <div className='storyUserCont'>
                <img src={storyuserpfp} alt="story_user_pfp" />
                <p>Islam Ali</p>
            </div>
        </div>
     );
}
 
export default StoryReel;
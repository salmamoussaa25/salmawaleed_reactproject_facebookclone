import React from 'react';
import "./Home.css"
import Button from '../components/Button';
import NavBar from '../components/Navbar';
import Watch from '../components/Watch';
import TitleDiv from '../components/TitleDiv';
import Group from '../components/Group';
import StoryReel from '../components/StoryReel';
import Post from '../components/Post';
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
                <div className='groupChatsCont'>
                    <TitleDiv />
                    <Group />
                    <Group />
                    <Group />
                    <Group />
                </div>              
            </div>
            <div className='middleSection'>
                <div className='storyReelsCont'>
                    <StoryReel />
                    <StoryReel />
                    <StoryReel />
                </div>
                <Post />
            </div>
        </div>
    </div> );
}
 
export default index;
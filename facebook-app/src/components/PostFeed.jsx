import React from 'react';
import "./PostFeed.css"
import postuser from "../assets/postuser.png"
import publicglobeicon from "../assets/publicglobeicon.png"
import postimg from "../assets/postimg.png"

const PostFeed = () => {
    return ( 
        <div className='entirePost'>
            <div className='postDiv'>
            <div className='postInfo'>
                <div className='userInfo'>
                <img src={postuser} alt="user_post_pfp" className='userPfp' />
                <div className='userName_Date'>
                    <p>Albert Flores</p>
                    <div className='datePublic'>
                        <p>2d •</p>
                        <img src={publicglobeicon} />
                    </div>
                </div>
                </div>
            </div>
                <p>…</p>
        </div>
        <img src={postimg} />
        </div>
     );
}
 
export default PostFeed;
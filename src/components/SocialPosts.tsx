import React from "react";
import {useState} from 'react'
import PostForm from "./PostForm";
import Post from '../model/Post';

function SocialPosts() {
    const [postform, setPostForm] = useState(false);
 
    function showPostForm(postform: Post){
        
        setPostForm(true);
    }

    return (
        <div className="SocialPosts">
            {postform === true && <PostForm /> }
            <button onClick={ () => { setPostForm( true ); } } >New Thought</button>
        </div>
    )
}

{/* <button disabled={theme === false} onClick={dark}>Light</button> */}


export default SocialPosts;

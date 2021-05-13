import React from "react";
import {useState} from 'react'
import PostForm from "./PostForm";

function SocialPosts() {
    const [postform, setPostForm] = useState(false);
 
    function showPostForm(postform: PostForm){
        
        setPostForm(true);
    }

    return (
        <div className="SocialPosts">
            <div style={{display:"none"}}> <PostForm setPostForm={true} /></div>

            <button onClick = {()=>setPostForm(true)} >New Thought</button>
        </div>
    )
}

{/* <button disabled={theme === false} onClick={dark}>Light</button> */}


export default SocialPosts;

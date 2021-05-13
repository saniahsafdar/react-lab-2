import Post from '../model/Post';
import { useState, FormEvent } from "react";

interface Props {
    onSubmit: (title: Post, thought: Post) => void;
  }

function PostForm () {
    const [ title, setTitle ] = useState(" ");
    const [ thought, setThought ] = useState(" ");

    return (
        <form className="PostForm">
            <p>
                <label>
                <input type="text" className="title" onChange={e => setTitle(e.target.value)} value={title} />
                </label>
            </p>
            <p>
                <label>
                <input type="text" className="thought" onChange={e => setThought(e.target.value)} value={thought} />
                </label>
            </p>
        </form>
    )
}

export default PostForm;
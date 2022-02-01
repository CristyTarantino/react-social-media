import {useContext, useRef, useState} from "react";
import {PostContext, UserContext} from "../App";

const CreatePost = () => {
    const [content, setContent] = useState('')
    // @ts-ignore
    const [image, setImage] = useState<Blob | MediaSource>(null)
    const imageInputRef = useRef()
    const user = useContext(UserContext)
    // @ts-ignore
    const {dispatch} = useContext(PostContext)

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const post = {
            content,
            image,
            user,
            id: Date.now()
        }
        dispatch({type: 'ADD_POST', payload: {post}})
        setContent('');
        // @ts-ignore
        imageInputRef.current.value = ''
    }

    return (
        <div>
            <h1>Create New Post</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       placeholder="Add Post Content"
                       onChange={event => setContent(event.target.value)}
                       value={content}
                />
                {/* @ts-ignore */}
                <input ref={imageInputRef} type="file" onChange={event => setImage(event.target.files[0])}/>
                <button type="submit">Submit Post</button>
            </form>
        </div>
    )
}

export default CreatePost

import {useContext} from 'react'
import {PostContext, UserContext} from "../App";

type PostProps = { content: string, image: Blob | MediaSource, user: string, id: number }

const Post = ({image, content, user, id}: PostProps) => {
    const currentUser = useContext(UserContext);
    // @ts-ignore
    const {dispatch} = useContext(PostContext);
    let isCurrentUser = currentUser === user;

    const handleDeletePost = () => dispatch({
        type: "DELETE_POST", payload: {id}
    });

    return (
        <li>
            {/* @ts-ignore */}
            {image && (
                <img
                    style={{height: 100, width: 200, objectFit: 'cover'}}
                    src={URL.createObjectURL(image)}
                    alt="Post cover"
                />
            )}
            <p>{content}</p>
            <div style={{
                color: isCurrentUser ? 'green' : 'black'
            }}>{user}</div>
            {isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}
        </li>
    )
}

export default Post

import {memo} from "react";
import Post from "./Post";

type PostType = { content: string, image: Blob | MediaSource, user: string, id: number }

type PostListProps = {
    postList: PostType[],
}

const PostList = ({postList}: PostListProps) => {
    return <ul>
        {
            postList.map((post) => (
                <Post key={post.id} {...post} />
            ))
        }
    </ul>
}

export default memo(PostList)

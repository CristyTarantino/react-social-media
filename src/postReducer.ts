type PostType = { content: string, image: Blob | MediaSource, user: string, id: number }

const postReducer = (state: { postList: any }, action: { type: string; payload: any }) => {
    switch (action.type) {
        case "ADD_POST": {
            return {
                ...state,
                postList: [action.payload.post, ...state.postList]
            }
        }
        case "DELETE_POST": {
            const deletedPostId = action.payload.id
            return {
                ...state,
                postList: state.postList.filter((post: PostType) => post.id !== deletedPostId)
            }
        }
        default:
            return state
    }
}

export default postReducer

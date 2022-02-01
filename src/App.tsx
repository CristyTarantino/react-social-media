import './App.css';
import Login from "./components/Login";
import {createContext, useContext, useEffect, useReducer, useState} from "react";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import postReducer from "./postReducer";

export const UserContext = createContext('')
export const PostContext = createContext({
    postList: []
})

const App = () => {
    const [user, setUser] = useState('Cristina')
    const initialPostState = useContext(PostContext);
    const [state, dispatch] = useReducer(postReducer, initialPostState)

    useEffect(() => {
        document.title = user ? `${user}'s Feed` : 'Please log in'
    }, [user])

    if (!user) {
        return <Login setUser={setUser}/>
    }

    return (
        // @ts-ignore
        <PostContext.Provider value={{state, dispatch}}>
            <UserContext.Provider value={user}>
                <Header setUser={setUser}/>
                <CreatePost/>
                <PostList postList={state.postList}/>
            </UserContext.Provider>
        </PostContext.Provider>
    );
}

export default App

import {useState} from "react";

interface LoginProps {
    setUser: (username: string) => void
}

const Login = ({setUser}: LoginProps) => {
    const [username, serUsername] = useState('')

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        setUser(username)
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={event => serUsername(event.target.value)}
                    placeholder="input username" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login

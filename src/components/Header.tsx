import {useContext} from "react";
import {UserContext} from "../App";

type HeaderProps = {
    setUser: (user: string) => void,
}

/**
 * Greet the user to display their username and include a logout button
 * @constructor
 */
const Header = ({setUser}: HeaderProps) => {
    const currentUser = useContext(UserContext);

    return (
        <div>
            Welcome, {currentUser}!
            <button onClick={() => setUser("")}>Logout</button>
        </div>
    )
}

export default Header

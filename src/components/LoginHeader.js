import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

function LoginHeader() {

    const { user } = useContext(AuthContext);

    if (user === null || user === undefined) {
        return (
            <h3>
                <div className="pageLink">
                    <Link to="/signin">INLOGGEN</Link>
                </div>
                OF
                <div className="pageLink">
                    <Link to="/signup">AANMELDEN</Link>
                </div>
            </h3>
        )
    } return (<></>)
}

export default LoginHeader;
import {Link} from "react-router-dom";

function LoginHeader() {

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
}

export default LoginHeader;
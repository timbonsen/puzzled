import {AuthContext} from "../../context/AuthContext";
import {useContext} from "react";
import {Redirect} from "react-router-dom";

function PrivateRoute({ page }) {
    const { user } = useContext(AuthContext);

    if (user != null) {
        return page;
    }
    return <Redirect to="/" />
}

export default PrivateRoute;
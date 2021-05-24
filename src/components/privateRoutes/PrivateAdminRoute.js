import {AuthContext} from "../../context/AuthContext";
import {useContext} from "react";
import {Redirect} from "react-router-dom";

function PrivateAdminRoute({ page }) {
    const { user } = useContext(AuthContext);

    if (user.username === "admin") {
        return page;
    }
    return <Redirect to="/" />
}

export default PrivateAdminRoute;
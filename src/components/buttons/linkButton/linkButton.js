import {Link} from "react-router-dom";

function LinkButton({title, link}) {
    return(
        <Link className="regularButton" to={link}>{title}</Link>
    )
}

export default LinkButton;
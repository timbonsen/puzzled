import logo from "../assets/icons/JigsawFat.png";
import accountButton from "../assets/icons/AccountFat.png";
import { NavLink } from "react-router-dom";

function TopMenu() {
    return (
        <div className="navContainer">
            <div className="navBar">
                <nav>
                    <div className="logoContainer">
                        <img className="puzzledLogo" src={logo} alt="Puzzled Logo"/>
                        <div className="puzzledName">PUZZLED</div>
                    </div>
                    <NavLink to="/" exact className="navButton" activeClassName="navButtonActive">HOME</NavLink>
                    <NavLink to="/upload" className="navButton" activeClassName="navButtonActive">UPLOAD</NavLink>
                    <NavLink to="/search" className="navButton" activeClassName="navButtonActive">SEARCH</NavLink>
                </nav>
                <img className="accountButton" src={accountButton} alt="Account Button"/>
            </div>
        </div>
    )
}

export default TopMenu;
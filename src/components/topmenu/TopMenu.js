import React, {useContext} from "react";
import logo from "../../assets/icons/JigsawFat.png";
import accountButton from "../../assets/icons/AccountFat.png";
import './topmenu.css';
import { NavLink } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function TopMenu() {

    const { user } = useContext(AuthContext);

    if (user) {
        return (
            <div className="navContainer">
                <div className="navBar">
                    <nav>
                        <div className="logoContainer">
                            <img className="puzzledLogo" src={logo} alt="Puzzled Logo"/>
                            <NavLink exact to="/" className="puzzledName">PUZZLED</NavLink>
                        </div>
                        <NavLink exact to="/" className="navButton" activeClassName="navButtonActive">HOME</NavLink>
                        <NavLink to="/upload" className="navButton" activeClassName="navButtonActive">UPLOAD</NavLink>
                        <NavLink exact to="/search" className="navButton" activeClassName="navButtonActive">SEARCH</NavLink>
                        <NavLink exact to="/puzzle" className="navButton" activeClassName="navButtonActive">PUZZLE</NavLink>
                        <NavLink to="/exchange/proposal" className="navButton" activeClassName="navButtonActive">EXCHANGE</NavLink>
                    </nav>
                    <NavLink to="/account" className="accountButton">
                        <img className="accountButtonImage" src={accountButton} alt="Account Button"/>
                    </NavLink>
                </div>
            </div>
        )
    }
    return (
        <div className="navContainer">
            <div className="navBar">
                <nav>
                    <div className="logoContainer">
                        <img className="puzzledLogo" src={logo} alt="Puzzled Logo"/>
                        <NavLink exact to="/" className="puzzledName">PUZZLED</NavLink>
                    </div>
                    <NavLink exact to="/" className="navButton" activeClassName="navButtonActive">HOME</NavLink>
                    <NavLink exact to="/search" className="navButton" activeClassName="navButtonActive">SEARCH</NavLink>
                </nav>
                <NavLink to="/account" className="accountButton">
                    <img className="accountButtonImage" src={accountButton} alt="Account Button"/>
                </NavLink>
            </div>
        </div>
    )
}

export default TopMenu;
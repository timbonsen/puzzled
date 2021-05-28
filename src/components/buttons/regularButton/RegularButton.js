import React from "react";
import './regularButton.css';

function RegularButton({text}) {
    return (
        <button
            type="button"
            className="regularButton"
        >{text}</button>
    );
}

export default RegularButton;
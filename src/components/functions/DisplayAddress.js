import React, {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

function DisplayAddress() {
    const { user: { address } } = useContext(AuthContext);

    return (<p>
        Straat: {address.streetName} {address.houseNumber}<br/>
        Postcode: {address.postalCode}<br/>
        Stad: {address.city}<br/>
        Land: {address.country}
    </p>)
}

export default DisplayAddress;
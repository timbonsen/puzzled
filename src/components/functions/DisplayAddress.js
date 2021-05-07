import React, {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import LinkButton from "../buttons/linkButton/linkButton";

function DisplayAddress() {
    const { user: { address } } = useContext(AuthContext);

    if (address === null || address === undefined) {
        return (
            <LinkButton link="/register-address" title="voeg uw adres toe"/>
        )
    }
    return (<p>
        Straat: {address.streetName} {address.houseNumber}<br/>
        Postcode: {address.postalCode}<br/>
        Stad: {address.city}<br/>
        Land: {address.country}
    </p>)
}

export default DisplayAddress;
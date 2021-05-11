import LinkButton from "../buttons/linkButton/linkButton";
import DisplayAddress from "./DisplayAddress";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

function IsAddressPresent() {

    const { user: { address }} = useContext(AuthContext);

    if (address === null || address === undefined) {
        return (
            <LinkButton link="/address" title="voeg uw adres toe"/>
        )
    } else {
        return (
            <>
                <DisplayAddress />
                <LinkButton link="/address" title="pas uw adres aan"/>
            </>
        )
    }
}

export default IsAddressPresent;
import React, { useState, useContext } from "react";
import PageHeader from "../../components/PageHeader";
import {Link} from "react-router-dom";
import LoginHeader from "../../components/LoginHeader";
import {AuthContext} from "../../context/AuthContext";

function AccountPage() {

    const { user } = useContext(AuthContext);
    console.log(user)
    if (user === null) {
        return (
            <>
                <PageHeader title="account details" />
                <div className="pageContainer">
                    <div className="pageContent">
                        <LoginHeader />
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <PageHeader title={`account details ${user.username}`} />
            <div className="pageContainer">
                <div className="pageContent">
                    <h3>Mijn gegevens</h3>
                    <p>
                        Naam: {user.fullName}<br/>
                        Emailadres: {user.emailAddress}
                    </p>
                    <h3>Mijn adres</h3>
                    <p>
                        Straat: Pandastraat 19<br/>
                        Postcode: 1234AB<br/>
                        Stad: Pandastad<br/>
                        Land: Pandaland
                    </p>
                    <h3>Mijn puzzels</h3>
                    <button className="uploadButton" type="button">LOG UIT</button>
                    <button className="uploadButton" type="button">VERWIJDER ACCOUNT</button>
                </div>
            </div>
        </>
    )
}

export default AccountPage;
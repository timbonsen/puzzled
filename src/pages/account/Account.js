import React, {useContext} from "react";
import PageHeader from "../../components/headers/PageHeader";
import LoginHeader from "../../components/headers/LoginHeader";
import {AuthContext} from "../../context/AuthContext";
import IsAddressPresent from "../../components/functions/IsAddressPresent";
import LinkButton from "../../components/buttons/linkButton/linkButton";
import DisplayPuzzles from "../../components/functions/DisplayPuzzles";

function AccountPage() {

    const {user, logout} = useContext(AuthContext);
    console.log(user)

    if (!user) {
        return (
            <>
                <PageHeader title="account details"/>
                <div className="pageContainer">
                    <div className="pageContent">
                        <LoginHeader/>
                    </div>
                </div>
            </>
        )
    } else if (user.username === "admin") {
        return (
            <>
                <PageHeader title={`admin account`}/>
                <div className="pageContainer">
                    <div className="pageContent">
                        <h3>Mijn gegevens</h3>
                        <p>
                            Naam: {user.fullname}<br/>
                            Emailadres: {user.email}
                        </p>
                        <button className="regularButton" type="button" onClick={logout}>LOG UIT</button>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <PageHeader title={`account details ${user.username}`}/>
                <div className="pageContainer">
                    <div className="pageContent">
                        <h3>Mijn gegevens</h3>
                        <p>
                            Naam: {user.fullname}<br/>
                            Emailadres: {user.email}
                        </p>
                        <h3>Mijn adres</h3>
                        <IsAddressPresent/>
                        <h3>Mijn puzzels</h3>

                        <DisplayPuzzles search="user"/>

                        <button className="regularButton" type="button" onClick={logout}>LOG UIT</button>
                        <LinkButton link="/delete-account" title="verwijder account"/>
                    </div>
                </div>
            </>
        )
    }
}

export default AccountPage;
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import IsLoggedIn from "../../components/functions/IsLoggedIn";
import {Link} from "react-router-dom";
import LoginHeader from "../../components/LoginHeader";

function AccountPage() {
    
    return (
        <>
            <PageHeader title="ACCOUNT DETAILS" />
            <div className="pageContainer">
                <div className="pageContent">
                    <LoginHeader />
                </div>
            </div>
        </>
    )
}

export default AccountPage;
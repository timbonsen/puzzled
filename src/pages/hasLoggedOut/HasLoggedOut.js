import PageHeader from "../../components/PageHeader";
import React from "react";

function HasLoggedOut() {
    return (
        <>
            <PageHeader title="U bent succesvol uitgelogd!"/>
            <div className="pageContainer">
                <div className="pageContent">
                    <p>U word nu automatisch doorgestuurd naar de Homepage</p>
                </div>
            </div>
        </>
    )
}

export default HasLoggedOut;
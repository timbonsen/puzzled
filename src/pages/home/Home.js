import React from "react";
import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <PageHeader title="HOME" />
            <div className="pageContainer">
                <h3>
                    <Link to="/signin">INLOGGEN</Link> OF <Link to="/signup">AANMELDEN</Link>
                </h3>
            </div>
        </>
    )
}

export default HomePage;
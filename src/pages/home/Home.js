import React from "react";
import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <PageHeader title="HOME" />
            <div className="pageContainer">
                <p>
                    <Link to="/signin">INLOGGEN</Link> OF <Link to="/signup">AANMELDEN</Link>
                </p>
            </div>
        </>
    )
}

export default HomePage;
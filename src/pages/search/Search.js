import React from "react";
import PageHeader from "../../components/PageHeader";
import LoginHeader from "../../components/LoginHeader";

function SearchPage() {
    return (
        <>
            <PageHeader title="SEARCH" />
            <div className="pageContainer">
                <div className="pageContent">
                    <LoginHeader />
                    <p>
                        Test test test test test
                    </p>
                </div>
            </div>
        </>
    )
}

export default SearchPage;
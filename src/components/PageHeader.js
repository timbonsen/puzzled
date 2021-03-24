import React from 'react';

function PageHeader({ title }) {
    return (
        <div className="titleContainer">
            <h2 className="pageTitle">{title}</h2>
        </div>
    );
}

export default PageHeader;
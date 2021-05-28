import React from 'react';

function PageHeader({ title }) {
    return (
        <div className="titleContainer">
            <h3 className="pageTitle">{title}</h3>
        </div>
    );
}

export default PageHeader;
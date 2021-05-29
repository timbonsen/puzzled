import React from 'react';
import PageHeader from '../../components/headers/PageHeader';

function UserFeedback({ title, text }) {
  return (
    <>
      <PageHeader title={title} />
      <div className="pageContainer">
        <div className="pageContent">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default UserFeedback;

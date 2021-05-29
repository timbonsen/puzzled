import React, { useContext } from 'react';
import PageHeader from '../../components/headers/PageHeader';
import LoginHeader from '../../components/headers/LoginHeader';
import { AuthContext } from '../../context/AuthContext';
import IsAddressPresent from '../../components/functions/IsAddressPresent';
import LinkButton from '../../components/buttons/linkButton';
import DisplayPuzzles from '../../components/functions/DisplayPuzzles';
import './Account.css';

function AccountPage() {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return (
      <>
        <PageHeader title="account details" />
        <div className="pageContainer">
          <div className="pageContent">
            <LoginHeader />
            <p>Je bent nog niet ingelogd.</p>
          </div>
        </div>
      </>
    );
  } if (user.username === 'admin') {
    return (
      <>
        <PageHeader title="admin account" />
        <div className="pageContainer">
          <div className="pageContent">
            <h3>Mijn gegevens</h3>
            <p>
              Naam:
              {' '}
              {user.fullname}
              <br />
              E-mailadres:
              {' '}
              {user.email}
            </p>
            <button className="regularButton" type="button" onClick={logout}>LOG UIT</button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <PageHeader title={`account details ${user.username}`} />
      <div className="pageContainer">
        <div className="pageContent">
          <div className="accountDetailsContainer">
            <div className="accountDetails">
              <h3>Mijn gegevens</h3>
              <p>
                Gebruikersnaam:
                {' '}
                {user.username}
                <br />
                Naam:
                {' '}
                {user.fullname}
                <br />
                Emailadres:
                {' '}
                {user.email}
              </p>
            </div>
            <div className="addressContainer">
              <h3>Mijn adres</h3>
              <IsAddressPresent />
            </div>
          </div>
          <h3>Mijn puzzels</h3>
          <LinkButton link="/upload" title="puzzel uploaden" />
          <DisplayPuzzles search="user" />
          <div className="buttonBar">
            <button className="regularButton" type="button" onClick={logout}>LOG UIT</button>
            <LinkButton link="/delete-account" title="verwijder account" buttonStyle="delete" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountPage;

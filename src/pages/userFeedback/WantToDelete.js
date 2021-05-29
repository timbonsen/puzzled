import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/headers/PageHeader';
import { AuthContext } from '../../context/AuthContext';
import LinkButton from '../../components/buttons/linkButton';
import https from '../../http-common';
import DisplayPuzzles from '../../components/functions/DisplayPuzzles';

function WantToDelete() {
  const { user: { username }, logout } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();

  async function deleteAccount() {
    try {
      await https.delete(`/users/${username}`);
      history.push('/feedback/deleted');
      logout();
    } catch (e) {
      console.error(e);
      setErrorMessage('Verwijder eerst al je puzzels');
    }
  }

  return (
    <>
      <PageHeader title="weet je het zeker?" />
      <div className="pageContainer">
        <div className="pageContent">
          <LinkButton link="/account" title="ga terug" />
          <span className="errorMessage">Om je account te kunnen verwijderen moet je eerst al je geüploade puzzels verwijderen.</span>
          <DisplayPuzzles search="user" />
          {errorMessage && <span className="errorMessage">{errorMessage}</span>}
          <button className="deleteButton" type="button" onClick={deleteAccount}>verwijder account</button>
        </div>
      </div>
    </>
  );
}

export default WantToDelete;

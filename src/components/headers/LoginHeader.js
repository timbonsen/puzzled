import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function LoginHeader() {
  const { user } = useContext(AuthContext);

  if (user === null || user === undefined) {
    return (
      <div className="loginHeader">
        <div className="pageLink">
          <Link to="/signin">INLOGGEN</Link>
        </div>
        <h3>OF</h3>
        <div className="pageLink">
          <Link to="/signup">REGISTREREN</Link>
        </div>
      </div>
    );
  }
  return (<></>);
}

export default LoginHeader;

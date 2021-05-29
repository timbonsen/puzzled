import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function PrivateAdminRoute({ page }) {
  const { user } = useContext(AuthContext);

  if (user.username === 'admin') {
    return page;
  }
  return <Redirect to="/" />;
}

export default PrivateAdminRoute;

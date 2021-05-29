import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line camelcase
import jwt_Decode from 'jwt-decode';
import https from '../http-common';
import LoadingPage from '../pages/userFeedback/LoadingPage';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  // eslint-disable-next-line no-undef
  const token = localStorage.getItem('token');
  const history = useHistory();
  const [authState, setAuthState] = useState({
    user: null,
    status: 'done',
  });

  async function fetchUserData(jwtToken) {
    const decoded = jwt_Decode(jwtToken);
    const username = decoded.sub;

    setAuthState({
      user: null,
      status: 'pending',
    });

    try {
      const result = await https.get(`/users/${username}`);
      if (result.data.address != null) {
        setAuthState({
          user: {
            username: result.data.username,
            email: result.data.email,
            firstname: result.data.firstname,
            fullname: result.data.fullname,
            lastname: result.data.lastname,
            address: {
              id: result.data.address.id,
              streetName: result.data.address.streetName,
              houseNumber: result.data.address.houseNumber,
              postalCode: result.data.address.postalCode,
              city: result.data.address.city,
              country: result.data.address.country,
            },
          },
          status: 'done',
        });
      }
      setAuthState({
        user: {
          username: result.data.username,
          email: result.data.email,
          firstname: result.data.firstname,
          fullname: result.data.fullname,
          lastname: result.data.lastname,
          address: result.data.address,
        },
        status: 'done',
      });
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (token && !authState.user) {
      fetchUserData(token).then();
    } else {
      setAuthState({
        status: 'done',
      });
    }
  }, []);

  function login(jwtToken) {
    // eslint-disable-next-line no-undef
    localStorage.setItem('token', jwtToken);

    fetchUserData(jwtToken).then(() => {
      history.push('/feedback/login');
      setTimeout(() => {
        history.push('/account');
      }, 1500);
    });
  }

  function updateUser() {
    history.push('/feedback/update');
    fetchUserData(token).then(() => {
      history.push('/account');
    });
  }

  function logout() {
    // eslint-disable-next-line no-undef
    localStorage.removeItem('token');

    setAuthState({
      user: null,
      status: 'done',
    });
    history.push('/feedback/logout');
    setTimeout(() => {
      history.push('/');
    }, 1500);
  }

  const data = {
    ...authState,
    login,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={data}>
      {authState.status === 'done'
        ? children
        : <LoadingPage />}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

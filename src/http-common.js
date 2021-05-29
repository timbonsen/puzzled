import axios from 'axios';

// eslint-disable-next-line no-undef
const jwtToken = localStorage.getItem('token');

export default axios.create({

  baseURL: 'https://localhost:8443',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwtToken}`,
    'Access-Control-Allow-Origin': '*',
  },
});

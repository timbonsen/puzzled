import { useContext } from 'react';
import LinkButton from '../buttons/linkButton';
import DisplayAddress from './DisplayAddress';
import { AuthContext } from '../../context/AuthContext';

function IsAddressPresent() {
  const { user: { address } } = useContext(AuthContext);

  if (address === null || address === undefined) {
    return (
      <LinkButton link="/address" title="voeg uw adres toe" />
    );
  }
  return (
    <>
      <DisplayAddress />
      <LinkButton link="/address" title="pas uw adres aan" />
    </>
  );
}

export default IsAddressPresent;

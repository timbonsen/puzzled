import { useContext, useEffect, useState } from 'react';
import https from '../../http-common';
import { AuthContext } from '../../context/AuthContext';
import GetImage from './GetImage';

function DisplayPuzzles({ search, value }) {
  const { user } = useContext(AuthContext);
  const [puzzles, setPuzzles] = useState([]);
  const [loading, toggleLoading] = useState();
  const [puzzleList, setPuzzleList] = useState(
    <>
      <span className="errorMessage">Kon geen puzzels vinden</span>
    </>,
  );

  async function getPuzzles() {
    toggleLoading(true);
    if (search === 'none') {
      setPuzzleList(
        <>
          <div className="puzzleContainer">
            <span className="errorMessage">Geen resultaten</span>
          </div>
        </>,
      );
      toggleLoading(false);
    } else if (search === 'user') {
      try {
        const result = await https.get(`/users/${user.username}/puzzles`);
        setPuzzles(result.data);
        toggleLoading(false);
      } catch (e) {
        console.error(e);
        toggleLoading(false);
      }
    } else if (search === 'all') {
      try {
        const result = await https.get('/puzzles/all');
        setPuzzles(result.data);
        toggleLoading(false);
      } catch (e) {
        console.error(e);
        toggleLoading(false);
      }
    } else if (value === '') {
      toggleLoading(false);
    } else {
      try {
        const result = await https.get(`/puzzles/${search}/${value}`);
        setPuzzles(result.data);
        toggleLoading(false);
      } catch (e) {
        console.error(e);
        toggleLoading(false);
      }
    }
  }

  useEffect(getPuzzles, [value]);

  function ifThereArePuzzles() {
    if (!loading && puzzles.length < 1) {
      return (
        <span className="errorMessage">Geen resultaten</span>
      );
    }
    return puzzles.map((puzzle) => (
      <GetImage puzzle={puzzle} format="small" />
    ));
  }

  useEffect(() => {
    setPuzzleList(
      <>
        <div className="puzzleContainer">
          {loading && <span className="errorMessage">Loading...</span>}
          {ifThereArePuzzles()}
        </div>
      </>,
    );
  }, [loading]);

  return puzzleList;
}

export default DisplayPuzzles;

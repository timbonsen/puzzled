import { useEffect, useState } from 'react';
import https from '../../http-common';
import PuzzleCard from '../puzzleDisplay/PuzzleCard';
import LargePuzzleCard from '../puzzleDisplay/LargePuzzleCard';

function GetImage({ puzzle, format }) {
  const [image, setImage] = useState({
    data: {
      data: null,
    },
  });
  const [response, setResponse] = useState(
    <></>,
  );

  async function fetchImage() {
    try {
      const result = await https.get(`/users/puzzles/image/${puzzle.image.id}`, {
        responseType: 'blob',
      });
      setImage(result);
    } catch (e) {
      console.error(e);
    }
  }

  // eslint-disable-next-line consistent-return
  function determineResponse() {
    if (format === 'large') {
      return <LargePuzzleCard input={puzzle} image={image} />;
    } if (format === 'small') {
      return <PuzzleCard input={puzzle} image={image} />;
    }
  }

  useEffect(fetchImage, []);
  useEffect(() => {
    setResponse(
      determineResponse(),
    );
  }, [image]);

  return response;
}

export default GetImage;

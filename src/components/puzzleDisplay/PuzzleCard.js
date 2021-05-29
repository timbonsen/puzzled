import './puzzleCard.css';
import { useHistory } from 'react-router-dom';

function PuzzleCard({ image, input }) {
  const history = useHistory();
  // eslint-disable-next-line no-undef
  const imageFile = new File([image.data], input.title, {
    type: image.data.type,
  });
  // eslint-disable-next-line no-undef
  const imageUrl = window.webkitURL.createObjectURL(imageFile);

  function displayPuzzle() {
    history.push(`/puzzle/${input.id}`);
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className="puzzleCard" onClick={displayPuzzle} onKeyPress={displayPuzzle}>
        <img className="puzzleImage" src={imageUrl} alt={input.title} key={imageUrl} />
      </div>
    </>
  );
}

export default PuzzleCard;

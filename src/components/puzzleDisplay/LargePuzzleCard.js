import './puzzleCard.css';

function PuzzleCard({ image, input }) {
  // eslint-disable-next-line no-undef
  const imageFile = new File([image.data], input.title, {
    type: image.data.type,
  });
  // eslint-disable-next-line no-undef
  const imageUrl = window.webkitURL.createObjectURL(imageFile);

  return (
    <div className="puzzleCard">
      <img className="largeImage" src={imageUrl} alt={input.title} />
    </div>
  );
}

export default PuzzleCard;

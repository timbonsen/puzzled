import './puzzleCard.css'


function PuzzleCard({ image, input }) {
    const imageFile = new File([image.data], input.title, {
        type: image.data.type
    });
    const imageUrl = window.webkitURL.createObjectURL(imageFile);

    return (
        <div className="puzzleCard">
            <img className="largeImage" src={imageUrl} alt={input.title} />
        </div>
    )
}

export default PuzzleCard;
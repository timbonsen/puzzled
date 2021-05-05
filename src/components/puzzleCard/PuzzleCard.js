import './puzzleCard.css'

function PuzzleCard({ image, title }) {
    function showInfo() {

    }

    return (
        <div className="puzzleCard">
            <img className="puzzleImage" src={image} alt={title} onClick={showInfo}/>
        </div>
    );
}

export default PuzzleCard;
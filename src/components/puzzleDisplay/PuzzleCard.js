import './puzzleCard.css'
import {useHistory} from "react-router-dom";

function PuzzleCard({ image, input }) {
    const history = useHistory();
    const imageFile = new File([image.data], input.title, {
        type: image.data.type
    });
    const imageUrl = window.webkitURL.createObjectURL(imageFile);

    function displayPuzzle() {
        history.push(`/puzzle/${input.id}`);
    }

    return (
        <div className="puzzleCard" onClick={displayPuzzle}>
            <img className="puzzleImage" src={imageUrl} alt={input.title} key={imageUrl} />
        </div>
    )
}

export default PuzzleCard;
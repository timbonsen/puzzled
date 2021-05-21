import './puzzleCard.css'
import {useHistory} from "react-router-dom";

function PuzzleCard({ image, input }) {
    console.log(image);
    const history = useHistory();
    const imageFile = new File([image.data], input.title, {
        type: image.data.type
    });
    console.log(imageFile);
    const imageUrl = window.webkitURL.createObjectURL(imageFile);
    console.log(imageUrl);

    function displayPuzzle() {
        console.log(input.id);
        history.push(`/puzzle/${input.id}`);
    }

    return (
        <div className="puzzleCard" onClick={displayPuzzle}>
            <img className="puzzleImage" src={imageUrl} alt={input.title} />
        </div>
    )
}

export default PuzzleCard;
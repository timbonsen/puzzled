import './puzzleCard.css'
import axios from "axios";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";

function PuzzleCard({ image, title, id }) {

    /*const history = useHistory();

    async function showInfo() {
        try {
            const result = await axios.get(`https://localhost:8443/puzzles/${id}`);
            console.log(result);
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(showInfo, [])*/

    return (
        <div className="puzzleCard">
            <img className="puzzleImage" src={image} alt={title} />
        </div>
    );
}

export default PuzzleCard;
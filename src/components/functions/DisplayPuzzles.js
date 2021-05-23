import https from "../../http-common";
import {AuthContext} from "../../context/AuthContext";
import {useContext, useEffect, useState} from "react";
import GetImage from "./GetImage";

function DisplayPuzzles() {
    const {user} = useContext(AuthContext);
    const [puzzles, setPuzzles] = useState([]);
    const [puzzleList, setPuzzleList] = useState(
        <>
            <span className="errorMessage">Kon geen puzzels vinden</span>
        </>
    );

    async function getPuzzles() {

        try {
            const result = await https.get(`/users/${user.username}/puzzles`);
            console.log(result);
            setPuzzles(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(getPuzzles, [])
    console.log(puzzles)

    function ifThereArePuzzles() {
        if (!puzzles) {
            return <span className="errorMessage">Je hebt nog geen puzzels</span>
        } else {
            return puzzles.map((puzzle) => (
                    <GetImage puzzle={puzzle} format="small"/>
                )
            )
        }
    }

    useEffect(() => {
        setPuzzleList(
            <>
                <div className="puzzleContainer">
                    {ifThereArePuzzles()}
                </div>
            </>
        )
    }, [puzzles])
    /*console.log(puzzleList);*/
    return puzzleList;
}

export default DisplayPuzzles;
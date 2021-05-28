import https from "../../http-common";
import {AuthContext} from "../../context/AuthContext";
import {useContext, useEffect, useState} from "react";
import GetImage from "./GetImage";

function DisplayPuzzles({search, value}) {
    const {user} = useContext(AuthContext);
    const [puzzles, setPuzzles] = useState([]);
    const [puzzleList, setPuzzleList] = useState(
        <>
            <span className="errorMessage">Kon geen puzzels vinden</span>
        </>
    );

    async function getPuzzles() {
        console.log(search)
        if (search === "none") {
            console.log("None")
        } else if (search === "user") {
            try {
                const result = await https.get(`/users/${user.username}/puzzles`);
                console.log(result);
                setPuzzles(result.data);
            } catch (e) {
                console.error(e);
            }
        } else if (search === "all") {
            console.log("Alle puzzels")
            try {
                const result = await https.get(`/puzzles/all`);
                console.log(result);
                setPuzzles(result.data);
            } catch (e) {
                console.error(e);
            }
        } else {
            if (value === "") {
                console.log("searchNone");
            } else {
                console.log("Gezocht met filters");
                try {
                    const result = await https.get(`/puzzles/${search}/${value}`);
                    console.log(result);
                    setPuzzles(result.data);
                } catch (e) {
                    console.error(e);
                }
            }
        }
    }

    useEffect(getPuzzles, [value]);
    console.log(puzzles);

    function ifThereArePuzzles() {
        if (!puzzles || puzzles.length < 1) {
            return <span className="errorMessage">Geen resultaten</span>
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
    return puzzleList;
}

export default DisplayPuzzles;
import PageHeader from "../../components/PageHeader";
import {useHistory} from "react-router-dom";
import LoginHeader from "../../components/LoginHeader";
import https from "../../http-common";
import {useEffect, useState} from "react";
import GetImage from "../../components/functions/GetImage";

function PuzzlePage() {
    const id = (window.location.pathname + window.location.search).substr(8);
    const history = useHistory();
    const [puzzle, setPuzzle] = useState(undefined);
    const [dataIsPresent, toggleDataIsPresent] = useState(false);
    const [page, setPage] = useState(
        <>
            <PageHeader title="puzzel naam"/>
            <div className="pageContainer">
                <div className="pageContent">
                    <LoginHeader/>
                    <button type="button" className="regularButton" onClick={history.goBack}>terug</button>
                    <h3>Loading...</h3>
                </div>
            </div>
        </>
    );

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await https.get(`users/puzzles/${id}`);
                console.log(result);
                setPuzzle(result.data);
                toggleDataIsPresent(true);
            } catch (e) {
                console.error(e);
            }
        }

        if (puzzle === undefined) {
            fetchData()
        }
    }, [puzzle]);

    function isDataPresent() {
        if (dataIsPresent) {
            setPage(
                <>
                    <PageHeader title={puzzle.title}/>
                    <div className="pageContainer">
                        <div className="pageContent">
                            <LoginHeader/>
                            <button type="button" className="regularButton" onClick={history.goBack}>terug</button>
                            <GetImage puzzle={puzzle} format="large"/>
                            <h3>Eigenaar</h3>
                            <h4>{puzzle.owner.username}</h4>
                            <h3>Merk</h3>
                            <h4>{puzzle.puzzleBrand}</h4>
                            <h3>Aantal puzzelstukjes</h3>
                            <h4>{puzzle.numberOfPieces}</h4>
                            <h3>Hoogte</h3>
                            <h4>{puzzle.height}</h4>
                            <h3>Breedte</h3>
                            <h4>{puzzle.width}</h4>
                            <h3>Categorie</h3>
                            <h4>{puzzle.tag1}</h4>
                        </div>
                    </div>
                </>
            )
        }
    }

    useEffect(isDataPresent,[dataIsPresent]);

    return page;
}

export default PuzzlePage;
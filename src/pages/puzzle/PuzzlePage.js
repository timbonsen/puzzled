import PageHeader from "../../components/headers/PageHeader";
import {useHistory} from "react-router-dom";
import LoginHeader from "../../components/headers/LoginHeader";
import https from "../../http-common";
import {useContext, useEffect, useState} from "react";
import GetImage from "../../components/functions/GetImage";
import {AuthContext} from "../../context/AuthContext";
import "./puzzle.css"

function PuzzlePage() {
    const {user} = useContext(AuthContext);
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
                const result = await https.get(`puzzles/${id}`);
                setPuzzle(result.data);
                toggleDataIsPresent(true);
            } catch (e) {
                console.error(e);
            }
        }

        if (puzzle === undefined) {
            fetchData().then();
        }
    }, [puzzle]);

    async function deletePuzzle() {
        try {
            await https.delete(`puzzles/${id}`);
            setPage(
                <>
                    <PageHeader title="puzzel verwijderd"/>
                    <div className="pageContainer">
                        <div className="pageContent">
                            <p>De puzzel is succesvol verwijderd, U word doorgestuurd naar Uw account</p>
                        </div>
                    </div>
                </>
            );
            setTimeout(() => {
                history.push("/account");
            },1500);
        } catch (e) {
            console.error(e);
        }
    }

    function deleteButton() {
        if (dataIsPresent) {
            if (user.username === puzzle.owner.username) {
                return (
                    <button type="button" className="deleteButton" onClick={deletePuzzle}>verwijder puzzel</button>
                )
            }
        }
    }

    function isDataPresent() {
        if (dataIsPresent) {
            setPage(
                <>
                    <PageHeader title="puzzel info"/>
                    <div className="pageContainer">
                        <div className="pageContent">
                            <LoginHeader/>
                            <button type="button" className="regularButton" onClick={history.goBack}>terug</button>
                            <div className="puzzlePageContainer">
                                <h3>{puzzle.title}</h3>
                                <GetImage puzzle={puzzle} format="large"/>
                                <div className="puzzleInfoContainer">
                                    <div className="puzzlePageLeft">
                                        <h3>Eigenaar</h3>
                                        <h4>{puzzle.owner.username}</h4>
                                        <h3>Merk</h3>
                                        <h4>{puzzle.puzzleBrand}</h4>
                                        <h3>Aantal puzzelstukjes</h3>
                                        <h4>{puzzle.numberOfPieces}</h4>
                                    </div>
                                    <div className="puzzlePageRight">
                                        <h3>Hoogte</h3>
                                        <h4>{puzzle.height}</h4>
                                        <h3>Breedte</h3>
                                        <h4>{puzzle.width}</h4>
                                        <h3>Categorie</h3>
                                        <h4>{puzzle.tag1}</h4>
                                    </div>
                                </div>
                            </div>
                            {deleteButton()}
                        </div>
                    </div>
                </>
            )
        }
    }

    useEffect(isDataPresent, [dataIsPresent]);

    return page;
}

export default PuzzlePage;
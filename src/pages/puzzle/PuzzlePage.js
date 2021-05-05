import PageHeader from "../../components/PageHeader";
import puzzleImage from "../../assets/images/JumboCottage.jpg"
import {Link} from "react-router-dom";
import LoginHeader from "../../components/LoginHeader";


function PuzzlePage() {

    return (
        <>
            <PageHeader title="puzzel naam"/>
            <div className="pageContainer">
                <div className="pageContent">
                    <LoginHeader />
                    <img className="puzzleImage" src={puzzleImage} alt="puzzeltitel"/>
                    <h3>Eigenaar: timbo</h3>
                    <h3>Merk: Castor</h3>
                    <h3>Aantal puzzelstukjes: 1000</h3>
                    <h3>Hoogte: 20cm</h3>
                    <h3>Breedte: 30cm</h3>
                    <h3>Categorie: Natuur</h3>
                </div>
            </div>
        </>
    )

}

export default PuzzlePage;
import PageHeader from "../../components/PageHeader";
import puzzleImage from "../../assets/images/JumboCottage.jpg"


function PuzzlePage() {

    return (
        <>
            <PageHeader title="puzzel naam"/>
            <div className="pageContainer">
                <img className="puzzleImage" src={puzzleImage} alt="puzzeltitel"/>
                <h3>Merk: Castor</h3>
                <h3>Aantal puzzelstukjes: 1000</h3>
                <h3>Hoogte: 20cm</h3>
                <h3>Breedte: 30cm</h3>
                <h3>Categorie: Natuur</h3>
            </div>
        </>
    )

}

export default PuzzlePage;
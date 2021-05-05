import PageHeader from "../../components/PageHeader";
import './Exchange.css'
import image1 from '../../assets/images/CastorSwitzerland.jpg';
import image2 from '../../assets/images/JumboCottage.jpg'
import image3 from '../../assets/images/JumboCats.jpg'
import image4 from '../../assets/images/WasgijTerras.jpg'
import RegularButton from "../../components/buttons/regularButton/RegularButton";
import PuzzleCard from "../../components/puzzleCard/PuzzleCard";

function ExchangePage() {
    return (
        <>
            <PageHeader title="Ruilverzoek" />
            <div className="pageContainer">
                <div className="pageContent">
                    <div className="exchangeContainer">
                        <div className="exchangeLeft">
                            <h3>user a</h3>
                            <h4>Verstuurd de volgende puzzels naar User B</h4>
                            <PuzzleCard image={image1} title="Titel puzzel"/>
                            <PuzzleCard image={image3} title="Titel puzzel"/>
                            <RegularButton text="puzzel toevoegen"/>
                        </div>
                        <div className="exchangeRight">
                            <h3>user b</h3>
                            <h4>Verstuurd de volgende puzzels naar User A</h4>
                            <PuzzleCard image={image4} title="Titel puzzel"/>
                            <PuzzleCard image={image2} title="Titel puzzel"/>
                            <RegularButton text="puzzel toevoegen"/>
                        </div>
                    </div>
                    <div className="buttonBar">
                        <RegularButton text="accepteren"/>
                        <RegularButton text="afwijzen"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExchangePage;
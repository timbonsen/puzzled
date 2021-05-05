import PageHeader from "../../components/PageHeader";
import PuzzleCard from "../../components/puzzleCard/PuzzleCard";
import image1 from "../../assets/images/CastorSwitzerland.jpg";
import image3 from "../../assets/images/JumboCats.jpg";
import LinkButton from "../../components/buttons/linkButton/linkButton";

function ExchangeAccepted() {
    return (
        <>
            <PageHeader title="Verzendgegevens Ruil" />
            <div className="pageContainer">
                <div className="pageContent">
                    <div className="exchangeContainer">
                        <div className="exchangeSend">
                            <h4>Verstuur de onderstaande puzzels naar User B</h4>
                            <div className="puzzleContainer">
                                <PuzzleCard image={image1} title="Titel puzzel"/>
                                <PuzzleCard image={image3} title="Titel puzzel"/>
                            </div>
                            <p>
                                <h4>Adresgegevens User B:</h4>
                                Volledige naam<br/>
                                Straatnaam + huisnummer<br/>
                                Postcode + stad<br/>
                                Land
                            </p>
                        </div>
                    </div>
                    <div className="buttonBar">
                        <LinkButton link="/account" title="verzonden" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExchangeAccepted;
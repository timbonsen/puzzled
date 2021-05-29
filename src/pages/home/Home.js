import React from 'react';
import PageHeader from '../../components/headers/PageHeader';
import LoginHeader from '../../components/headers/LoginHeader';

function HomePage() {
  return (
    <>
      <PageHeader title="HOME" />
      <div className="pageContainer">
        <div className="pageContent">
          <LoginHeader />
          <div className="textContainer">
            <h3>Hoe werkt het?</h3>
            <p>
              Maak een account aan op onze website en upload Uw eigen puzzels die U zou willen
              ruilen met andere gebruikers. Zoek vervolgens op de website tussen alle geüploade
              puzzels naar 1 of meerdere puzzels die U zou willen ruilen voor Uw eigen puzzels.
              Klik vervolgens op de RUIL button om hem op te nemen in een ruilverzoek.
              Heeft diezelfde gebruiker nog meer puzzels die U zou willen ruilen dan kunt U deze
              aan het verzoek toevoegen. Wanneer Uw verzoek compleet is kunt U deze via de
              VERSTUUR button versturen naar de gebruiker waar de puzzels van zijn.
            </p>
            <p>
              Vervolgens krijgt de betreffende gebruiker het verzoek te zien en krijgt hij de
              mogelijkheid om te kijken of en zo ja voor welke puzzels van U hij deze zou willen
              ruilen. Deze voegt hij toe aan het ruilverzoek totdat hij tevreden is met welke
              puzzels van U hij voor zijn puzzels zou willen ruilen. U krijgt dan de mogelijkheid
              daarmee wel of niet akkoord te gaan en bij akkoord krijgt U beiden de
              verzendgegevens van elkaar en kunnen de puzzels opgestuurd worden. Als beide
              gebruikers de puzzels in goede orde ontvangen hebben kunnen ze het ruilverzoek
              sluiten en is alles netjes afgerond!
            </p>
            <p>
              Mocht een andere gebruiker niet willen ruilen voor 1 van Uw puzzels, heeft hij ook
              de mogelijkheid deze zonder puzzels ervoor terug te krijgen aan U te versturen of
              om deze eventueel aan U te verkopen. Mocht de andere gebruiker dat ook niet willen
              zult U een andere gebruiker moeten zoeken die wel met U zou willen ruilen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

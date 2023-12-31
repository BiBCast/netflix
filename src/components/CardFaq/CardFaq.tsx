import { EmailButton } from "../EmailButton/EmailButton";
import { CardFaqElement } from "./CardFaqElement";
import "./cardFaq.css";
export function CardFaq() {
  return (
    <div className="cardFaq">
      <h2>Domande frequenti</h2>
      <div className="cardFaq__container">
        <CardFaqElement title="Cos'è Netflix">
          Netflix è un servizio di streaming che offre una varietà di serie TV,
          film, documentari pluripremiati e tanto altro su una vasta gamma di
          dispositivi connessi a Internet.
          <br />
          <br />
          Guarda quello che vuoi, quando vuoi. Il tutto a una quota mensile
          ridotta. C'è sempre qualcosa di nuovo da scoprire: aggiungiamo nuovi
          film e serie TV ogni settimana!
        </CardFaqElement>
        <CardFaqElement title="Quanto costa Netflix?">
          Guarda Netflix su smartphone, tablet, Smart TV, laptop o dispositivi
          per lo streaming, il tutto per un importo mensile fisso. Piani da 5,49
          € a 17,99 € al mese. Nessun costo aggiuntivo, nessun contratto.
        </CardFaqElement>
        <CardFaqElement title="Dove posso guardare Netflix?">
          Guarda Netflix dove vuoi, quando vuoi. Accedi al tuo account per
          guardare subito Netflix dal tuo computer su netflix.com oppure da
          qualsiasi dispositivo connesso a Internet che supporta l'app Netflix,
          come smart TV, smartphone, tablet, lettori multimediali per streaming
          e console per videogiochi.
          <br />
          <br />
          Con l'app per iOS, Android e Windows 10 puoi anche scaricare i tuoi
          programmi preferiti. Usa la funzionalità di download per guardare i
          contenuti mentre sei in viaggio e senza connessione a Internet. Porta
          Netflix sempre con te.
        </CardFaqElement>
        <CardFaqElement title="Come posso disdire?">
          Netflix è flessibile. Nessun contratto fastidioso e nessun impegno.
          Puoi facilmente disdire il tuo contratto online con due clic. Nessuna
          penale: attiva o disdici il tuo account in qualsiasi momento.
        </CardFaqElement>
        <CardFaqElement title="Come posso guardare Netflix">
          Netflix ha un nutrito catalogo di lungometraggi, documentari, serie
          TV, anime, originali Netflix pluripremiati e tanto altro. Guarda tutto
          quello che vuoi, in qualsiasi momento.
        </CardFaqElement>
        <CardFaqElement title="Netflix è adatto ai bambini">
          L'area Netflix Bambini, già inclusa nell'abbonamento, offre ai
          genitori un maggiore controllo sui contenuti e ai più piccoli uno
          spazio dedicato dove guardare serie TV e film per tutta la famiglia.
          <br />
          <br />I profili Bambini hanno un filtro famiglia con PIN che ti
          permette di limitare l'accesso ai contenuti in base alla fascia d'età
          e bloccare la visione di titoli specifici.
        </CardFaqElement>
      </div>
      <h3>
        Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o
        riattivare il tuo abbonamento.
      </h3>
      <EmailButton />
    </div>
  );
}

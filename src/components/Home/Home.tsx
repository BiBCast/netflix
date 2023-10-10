import "./home.css";
import { EmailButton } from "../EmailButton/EmailButton";
export function Home() {
  return (
    <div className="home">
      <h1>
        I più grandi titoli italiani e internazionali sono su Netflix, a partire
        da 5,49 €.
      </h1>
      <h3>Abbonati subito. Disdici quando vuoi.</h3>
      <h3>
        Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o
        riattivare il tuo abbonamento.
      </h3>
      <EmailButton />
    </div>
  );
}

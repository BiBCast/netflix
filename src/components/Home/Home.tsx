import { CSSProperties, useState } from "react";
import "./home.css";
export function Home() {
  const [InputHaveFocus, setInputHaveFocus] = useState(false);
  const styleButton = {
    top: InputHaveFocus ? "0%" : "30%",
  } as CSSProperties;

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
      <div className="home__container">
        <div className="container__input">
          <label htmlFor="input" style={styleButton}>
            Indirizzo email
          </label>
          <input
            id="input"
            onFocus={(e) =>
              e.currentTarget.innerText == "" ? setInputHaveFocus(true) : true
            }
            onBlur={(e) =>
              e.target.value == "" ? setInputHaveFocus(false) : true
            }
          />
        </div>
        <div className="container__button">
          <button>button</button>
        </div>
      </div>
    </div>
  );
}

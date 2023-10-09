import { useState } from "react";
import "./cardFaqElement.css";
import { Plus } from "../assets/Plus";
import { X } from "../assets/X";
export function CardFaqElement() {
  const [isShow, setIsShow] = useState(false);
  const classExpand = isShow ? "ct__expand ct__expanded" : "ct__expand";

  return (
    <div className="ct__container">
      <div className="ct">
        <button
          className="ct__title"
          onClick={() => setIsShow((prev) => !prev)}
        >
          <h3>Cos'è Netflix </h3> {isShow ? <X /> : <Plus />}
        </button>
        <div className={classExpand}>
          <p>
            Netflix è un servizio di streaming che offre una varietà di serie
            TV, film, documentari pluripremiati e tanto altro su una vasta gamma
            di dispositivi connessi a Internet.
            <br />
            <br />
            Guarda quello che vuoi, quando vuoi. Il tutto a una quota mensile
            ridotta. C'è sempre qualcosa di nuovo da scoprire: aggiungiamo nuovi
            film e serie TV ogni settimana!
          </p>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="ct">
      <div className="ct__button">
        <button
          className="ct__title"
          onClick={() => setIsShow((prev) => !prev)}
        >
          <h3>Cosè Netflix </h3>
        </button>
        {isShow ? <X /> : <Plus />}
      </div>
      
      <div style={styleExpand}>
        <p className="ct__expand">
          Netflix è un servizio di streaming che offre una varietà di serie TV,
          film, documentari pluripremiati e tanto altro su una vasta gamma di
          dispositivi connessi a Internet. Guarda quello che vuoi, quando vuoi.
          Il tutto a una quota mensile ridotta. C'è sempre qualcosa di nuovo da
          scoprire: aggiungiamo nuovi film e serie TV ogni settimana!{" "}
        </p>
      </div>
    </div> */
}

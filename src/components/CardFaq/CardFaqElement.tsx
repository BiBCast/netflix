import { CSSProperties, useState } from "react";
import "./cardFaqElement.css";
import { Plus } from "../assets/Plus";
import { X } from "../assets/X";
export function CardFaqElement() {
  const [isShow, setIsShow] = useState(false);
  const styleExpand = {
    height: isShow ? "100%" : "0px",
  } as CSSProperties;
  return (
    <>
      <div className="ct">
        <button
          className="ct__title"
          onClick={() => setIsShow((prev) => !prev)}
        >
          <h3>Cosè Netflix </h3> {isShow ? <X /> : <Plus />}
        </button>
        <div className="ct__expand" style={styleExpand}>
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
    </>
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

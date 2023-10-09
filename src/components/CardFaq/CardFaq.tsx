import { CardFaqElement } from "./CardFaqElement";
import "./cardFaq.css";
export function CardFaq() {
  return (
    <div className="cardFaq">
      <h2>Domande frequenti</h2>
      <div className="cardFaq__container">
        <CardFaqElement />
        <CardFaqElement />
        <CardFaqElement />
        <CardFaqElement />
        <CardFaqElement />
        <CardFaqElement />
      </div>
      <div>insert email</div>
    </div>
  );
}

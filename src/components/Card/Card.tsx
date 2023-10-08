import "./card.css";
import { CardContent } from "../../App";
export function Card({ CardContent }: { CardContent: CardContent }) {
  return (
    <>
      {CardContent.isImageRight ? (
        <div className="card">
          <div>
            <h2>{CardContent.title}</h2>
            <p>{CardContent.paragraf}</p>
          </div>
          <div>
            <img src={CardContent.img} alt="" />
          </div>
        </div>
      ) : (
        <div className="card">
          <img src={CardContent.img} alt="" />
          <div>
            <h2>{CardContent.title}</h2>
            <p>{CardContent.paragraf}</p>
          </div>
        </div>
      )}
    </>
  );
}

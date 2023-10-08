import { PopCorn } from "../assets/PopCorn";
import { RightArrow } from "../assets/RightArrow";
import "./banner.css";
export function Banner() {
  return (
    <div className="banner">
      <div>
        <PopCorn />
      </div>
      <div className="banner__texts">
        <h2>Tutto ciò che ami di Netflix a soli 5,49 €.</h2>
        <h3>Scegli il piano Standard con pubblicità.</h3>
        <div className="texts__link">
          <a>Scopri di più</a>
          <RightArrow />
        </div>
      </div>
    </div>
  );
}

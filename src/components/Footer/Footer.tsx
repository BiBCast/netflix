import { SelectLang } from "../SelectLang/SelectLang";
import "./footer.css";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer_title">
        Domande? Chiama <span>800-130-364</span>
      </div>
      <div className="footer__colums">
        <div className="colums__container">
          <div>Domande frequenti</div>
          <div>Rapporti con gli investitori</div>
          <div>Come guardare Netflix</div>
          <div>Informazioni sull'azienda</div>
          <div>Note legali</div>
        </div>
        <div className="colums__container">
          <div>Centro assistenza</div>
          <div>Opportunita di lavoro</div>
          <div>Condizione di utilizzo</div>
          <div>Contattaci</div>
          <div>Solo su Netflix</div>
        </div>
        <div className="colums__container">
          <div>Account</div>
          <div>Riscatta carte regalo</div>
          <div>Privacy</div>
          <div>Test di velocita</div>
          <div>Preferenze per la pubblicità</div>
        </div>
        <div className="colums__container">
          <div>Media center</div>
          <div>Acquista carte regalo</div>
          <div>Preferenze per i cookie</div>
          <div>Garanzia legale</div>
          <div></div>
        </div>
      </div>
      <div>
        <SelectLang />
      </div>
      <div>Netflix Italia</div>
    </footer>
  );
}

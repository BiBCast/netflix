import { SelectLang } from "../SelectLang/SelectLang";
import { Logo } from "../assets/Logo";
import "./header.css";
export function Header() {
  return (
    <div className="header">
      <div>
        <Logo />
        <div className="header__logic">
          <SelectLang />
          <button className="logic__signin" type="button">
            Accedi
          </button>
        </div>
      </div>
    </div>
  );
}

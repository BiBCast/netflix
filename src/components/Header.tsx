import { Select } from "./Select/Select";
import { Logo } from "./assets/Logo";

export function Header() {
  return (
    <div className="header">
      <div>
        <Logo />
        <div className="header__logic">
          <Select/>
          <button className="logic__signin" type="button">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

import { CSSProperties, useState } from "react";
import "./input.css";
export function Input() {
  const [InputHaveFocus, setInputHaveFocus] = useState(false);
  const styleButton = {
    top: InputHaveFocus ? "0%" : "20%",
    fontSize: InputHaveFocus ? "0.8rem" : "1.3rem",
  } as CSSProperties;
  return (
    <div className="container__input">
      <label htmlFor="input" style={styleButton}>
        Indirizzo email
      </label>
      <input
        id="input"
        onFocus={(e) =>
          e.currentTarget.innerText == "" ? setInputHaveFocus(true) : true
        }
        onBlur={(e) => (e.target.value == "" ? setInputHaveFocus(false) : true)}
      />
    </div>
  );
}

import { DownArrow } from "../assets/DownArrow";
import { LanguageIcon } from "../assets/LanguageIcon";
import { Options } from "./Options";
import "./Select.css";
import { useState } from "react";
export function Select() {
  const [isSelectExpanded, setIsSelectExpanded] = useState(false);
  const [value, setValue] = useState("italiano");
  function handleOption(e: MouseEvent<HTMLDivElement>) {
    setValue(e.currentTarget.innerText);
  }
  return (
    <div
      className="logic__language"
      tabIndex={0}
      onBlur={() => setIsSelectExpanded(false)}
    >
      <LanguageIcon />
      <span>{value} </span>
      <DownArrow setIsSelectExpanded={setIsSelectExpanded} />
      <Options
        isSelectExpanded={isSelectExpanded}
        handleOption={handleOption}
      />
    </div>
  );
}

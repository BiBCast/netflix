import { CSSProperties, MouseEvent } from "react";

export function Options({
  isSelectExpanded,
  handleOption,
}: {
  isSelectExpanded: boolean;
  handleOption: (e: MouseEvent) => void;
}) {
  const styleOptions = {
    visibility: isSelectExpanded ? "visible" : "hidden",
    opacity: isSelectExpanded ? 1 : 0,
  } as CSSProperties;
  return (
    <div className="language__options" style={styleOptions}>
      <div onClick={handleOption}>italiano</div>
      <div onClick={handleOption}>english</div>
    </div>
  );
}

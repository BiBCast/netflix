import { Dispatch } from "react";

export function DownArrow({
  setIsSelectExpanded,
}: {
  setIsSelectExpanded: Dispatch<React.SetStateAction<boolean>>;
}) {
  function handleDownArrow() {
    setIsSelectExpanded((e) => !e);
  }
  return (
    <>
      <div className="down_arrow">
        <svg
          onClick={handleDownArrow}
          id="eJKDRIvbUYM1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
        >
          <path
            d="M6,9l6,6l6-6M12,9"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="" fill="none" stroke="#3f5787" strokeWidth="0.5" />
        </svg>
      </div>
      {/* <svg
        id="eQgLpZslDHK1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
      >
        <path
          d="M6,9l6-6.765285L18,9M12,9"
          transform="translate(0 6.382643)"
          fill="none"
          stroke="#000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="" fill="none" stroke="#3f5787" stroke-width="0.5" />
        <path d="" fill="none" stroke="#3f5787" stroke-width="0.5" />
        <path d="" fill="none" stroke="#3f5787" stroke-width="0.5" />
      </svg>
 */}
    </>
  );
}

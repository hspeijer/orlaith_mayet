import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ThesisHumaFallback.css";

export type ThesisHumaFallbackType = {
  className?: string;
  sourceImage?: string;
  inputTitel?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const ThesisHumaFallback: FunctionComponent<ThesisHumaFallbackType> = ({
  className = "",
  sourceImage,
  inputTitel,
  propTop,
  propLeft,
}) => {
  const thesisHumaFallbackStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className={`thesis-huma-fallback ${className}`}
      style={thesisHumaFallbackStyle}
    >
      <div className="thesis-huma-fallback-child" />
      <img className="source-image-icon1" alt="" src={sourceImage} />
      <div className="input-titel-30px1">
        <div className="input-titel1">{inputTitel}</div>
      </div>
    </div>
  );
};

export default ThesisHumaFallback;

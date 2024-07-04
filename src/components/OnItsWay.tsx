import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./OnItsWay.css";

export type OnItsWayType = {
  className?: string;
  sourceImage?: string;
  inputTitel?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
  propTop?: CSSProperties["top"];
};

const OnItsWay: FunctionComponent<OnItsWayType> = ({
  className = "",
  sourceImage,
  inputTitel,
  propLeft,
  propPadding,
  propTop,
}) => {
  const onItsWayStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      padding: propPadding,
      top: propTop,
    };
  }, [propLeft, propPadding, propTop]);

  return (
    <div className={`on-its-way2 ${className}`} style={onItsWayStyle}>
      <div className="project-images" />
      <img
        className="source-image-icon"
        loading="lazy"
        alt=""
        src={sourceImage}
      />
      <div className="input-titel-30px">
        <div className="input-titel">{inputTitel}</div>
      </div>
    </div>
  );
};

export default OnItsWay;

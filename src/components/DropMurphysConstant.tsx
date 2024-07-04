import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./DropMurphysConstant.css";

export type DropMurphysConstantType = {
  className?: string;
  sourceImage?: string;
  inputTitel?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const DropMurphysConstant: FunctionComponent<DropMurphysConstantType> = ({
  className = "",
  sourceImage,
  inputTitel,
  propTop,
  propLeft,
}) => {
  const dropMurphysConstantStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className={`drop-murphys-constant1 ${className}`}
      style={dropMurphysConstantStyle}
    >
      <div className="drop-murphys-constant-child" />
      <img className="source-image-icon1" alt="" src={sourceImage} />
      <div className="input-titel-30px1">
        <div className="input-titel1">{inputTitel}</div>
      </div>
    </div>
  );
};

export default DropMurphysConstant;

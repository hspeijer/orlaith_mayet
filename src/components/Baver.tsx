import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Baver.css";

export type BaverType = {
  className?: string;
  onItsWay1?: string;
  bver?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
};

const Baver: FunctionComponent<BaverType> = ({
  className = "",
  onItsWay1,
  bver,
  propLeft,
  propTop,
}) => {
  const baverStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`baver ${className}`} style={baverStyle}>
      <div className="work-projects-on-its-way2">
        <img className="on-its-way-12" loading="lazy" alt="" src={onItsWay1} />
        <div className="bver-wrapper">
          <div className="bver">{bver}</div>
        </div>
      </div>
    </div>
  );
};

export default Baver;

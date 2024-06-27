import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ONItsWay.css";

export type ONItsWayType = {
  className?: string;
  onItsWay1?: string;
  onItsWay?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const ONItsWay: FunctionComponent<ONItsWayType> = ({
  className = "",
  onItsWay1,
  onItsWay,
  propLeft,
}) => {
  const oNItsWayStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={`on-its-way ${className}`} style={oNItsWayStyle}>
      <div className="work-projects-on-its-way">
        <img className="on-its-way-1" loading="lazy" alt="" src={onItsWay1} />
        <div className="titel">
          <div className="on-its-way1">{onItsWay}</div>
        </div>
      </div>
    </div>
  );
};

export default ONItsWay;

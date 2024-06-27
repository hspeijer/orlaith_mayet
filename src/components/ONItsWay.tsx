import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ONItsWay.module.css";

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
    <div
      className={[styles.onItsWay, className].join(" ")}
      style={oNItsWayStyle}
    >
      <div className={styles.workProjectsOnItsWay}>
        <img
          className={styles.onItsWay1}
          loading="lazy"
          alt=""
          src={onItsWay1}
        />
        <div className={styles.titel}>
          <div className={styles.onItsWay2}>{onItsWay}</div>
        </div>
      </div>
    </div>
  );
};

export default ONItsWay;
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Baver.module.css";

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
    <div className={[styles.baver, className].join(" ")} style={baverStyle}>
      <div className={styles.workProjectsOnItsWay}>
        <img
          className={styles.onItsWay1}
          loading="lazy"
          alt=""
          src={onItsWay1}
        />
        <div className={styles.bverWrapper}>
          <div className={styles.bver}>{bver}</div>
        </div>
      </div>
    </div>
  );
};

export default Baver;
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./NoMatter.module.css";

export type NoMatterType = {
  className?: string;
  onItsWay1?: string;
  noMatter?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const NoMatter: FunctionComponent<NoMatterType> = ({
  className = "",
  onItsWay1,
  noMatter,
  propLeft,
}) => {
  const noMatterStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={[styles.noMatter, className].join(" ")}
      style={noMatterStyle}
    >
      <div className={styles.workProjectsOnItsWay}>
        <img
          className={styles.onItsWay1}
          loading="lazy"
          alt=""
          src={onItsWay1}
        />
        <div className={styles.titel}>
          <div className={styles.noMatter1}>{noMatter}</div>
        </div>
      </div>
    </div>
  );
};

export default NoMatter;
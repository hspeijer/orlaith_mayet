import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Header1.module.css";

export type HeaderType = {
  className?: string;

  /** Style props */
  orlaithMayetAlignSelf?: CSSProperties["alignSelf"];
  orlaithMayetPosition?: CSSProperties["position"];
  orlaithMayetTop?: CSSProperties["top"];
  orlaithMayetLeft?: CSSProperties["left"];
  orlaithMayetWidth?: CSSProperties["width"];
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  orlaithMayetAlignSelf,
  orlaithMayetPosition,
  orlaithMayetTop,
  orlaithMayetLeft,
  orlaithMayetWidth,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: orlaithMayetAlignSelf,
      position: orlaithMayetPosition,
      top: orlaithMayetTop,
      left: orlaithMayetLeft,
      width: orlaithMayetWidth,
    };
  }, [
    orlaithMayetAlignSelf,
    orlaithMayetPosition,
    orlaithMayetTop,
    orlaithMayetLeft,
    orlaithMayetWidth,
  ]);

  return (
    <header
      className={[styles.header, className].join(" ")}
      style={headerStyle}
    >
      <h2 className={styles.orlaithMayet}>Orlaith Mayet</h2>
      <nav className={styles.mainContent}>
        <nav className={styles.frameParent}>
          <div className={styles.workWrapper}>
            <div className={styles.work}>
              <a className={styles.workprojects}>Work/Projects</a>
            </div>
          </div>
          <div className={styles.map}>
            <a className={styles.map1}>Map</a>
          </div>
          <div className={styles.bio}>
            <a className={styles.bio1}>Bio</a>
          </div>
          <div className={styles.pressWrapper}>
            <div className={styles.press}>
              <a className={styles.press1}>Press</a>
            </div>
          </div>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
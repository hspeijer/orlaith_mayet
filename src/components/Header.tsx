import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <h1 className={styles.orlaithMayet}>Orlaith Mayet</h1>
      <nav className={styles.navigation}>
        <nav className={styles.navigationColumn}>
          <div className={styles.navigationItem}>
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
          <div className={styles.pressItem}>
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
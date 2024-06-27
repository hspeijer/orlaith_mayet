import { FunctionComponent } from "react";
import Header from "../components/Header1";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./APress.module.css";

const APress: FunctionComponent = () => {
  return (
    <div className={styles.aPress}>
      <Header
        orlaithMayetAlignSelf="stretch"
        orlaithMayetPosition="unset"
        orlaithMayetTop="unset"
        orlaithMayetLeft="unset"
        orlaithMayetWidth="unset"
      />
      <div className={styles.header}>
        <div className={styles.work}>
          <b className={styles.workprojects}>Work/Projects</b>
        </div>
        <div className={styles.map}>
          <b className={styles.map1}>Map</b>
        </div>
        <div className={styles.bio}>
          <b className={styles.bio1}>Bio</b>
        </div>
        <div className={styles.press}>
          <b className={styles.press1}>Press</b>
        </div>
        <img
          className={styles.homePageYellowTriangleWith}
          alt=""
          src="/home-page-yellow-triangle-with-name-2@2x.png"
        />
      </div>
      <section className={styles.aPressInner}>
        <div className={styles.frameParent}>
          <button className={styles.expositionWrapper}>
            <b className={styles.exposition}>Exposition</b>
          </button>
          <FrameComponent1 />
        </div>
      </section>
    </div>
  );
};

export default APress;
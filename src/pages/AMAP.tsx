import { FunctionComponent } from "react";
import Header from "../components/Header1";
import FrameComponent from "../components/FrameComponent";
import styles from "./AMAP.module.css";

const AMAP: FunctionComponent = () => {
  return (
    <div className={styles.aMap}>
      <Header />
      <div className={styles.sideBar}>
        <div className={styles.searchBarParent}>
          <div className={styles.searchBar}>
            <div className={styles.search}>search</div>
          </div>
          <h2 className={styles.wasteMap}>Waste Map</h2>
        </div>
      </div>
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
      <main className={styles.interactiveMapContentParent}>
        <section className={styles.interactiveMapContent}>
          <div className={styles.wrapperInteractiveMap}>
            <img
              className={styles.interactiveMapIcon}
              loading="lazy"
              alt=""
              src="/interactive-map@2x.png"
            />
          </div>
          <div className={styles.legend}>
            <b className={styles.legend1}>Legend:</b>
            <div className={styles.underConstruction}>
              <p className={styles.underConstruction1}>UNDER CONSTRUCTION</p>
            </div>
          </div>
        </section>
        <div className={styles.wasteMessage}>
          <div className={styles.whileWasteIs}>
            While waste is piling up, we are running out of solutions. This
            initiative is a collaborative map of scrapyard / recycling
            facilities of free resources such as wood, metal, electronic
            components, insulation materials, what have you. You are also
            invited to participate and add places and materials to the map
            yourself. Legend and details to find materials and add locations can
            be found below the map, in the “how to get involved” section. 
          </div>
        </div>
        <FrameComponent />
      </main>
    </div>
  );
};

export default AMAP;
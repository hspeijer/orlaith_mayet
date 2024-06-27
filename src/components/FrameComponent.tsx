import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.sliderContentParent, className].join(" ")}>
      <div className={styles.sliderContent}>
        <div className={styles.sliderImiges}>
          <div className={styles.imageSliderMap}>
            <div className={styles.wrapper}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/1@2x.png"
              />
            </div>
            <div className={styles.frameParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-243@2x.png"
              />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/frame-244@2x.png"
              />
            </div>
            <img
              className={styles.imageSliderMapChild}
              loading="lazy"
              alt=""
              src="/frame-245@2x.png"
            />
            <img
              className={styles.imageSliderMapItem}
              loading="lazy"
              alt=""
              src="/frame-246@2x.png"
            />
          </div>
          <div className={styles.projectDescription}>
            <div className={styles.iStartedThis}>
              I started this map after the project “No Matter” (see
              Work/Projects), in order to share my tips to find materials,
              sometimes in the street, on construction sites, in the “free”
              section of websites where people sell their stuff such as
              Marktplaats, Le Bon Coin. At other times just by asking the
              manufacturer for their leftovers. The map only gives the
              locations, in order to get the material you have to enquire
              directly on site.
            </div>
            <div className={styles.wasteStatistics}>
              <div className={styles.tonsOfWasteContainer}>
                <p className={styles.p}>236,281,118</p>
                <p className={styles.tonsOfWaste}>Tons of waste dumped</p>
                <p className={styles.globallyThisYear}>globally, this year</p>
                <p className={styles.theWorldCounts}>
                  <a
                    className={styles.theWorldCounts1}
                    href="https://www.theworldcounts.com//challenges/waste/global-waste-problem"
                    target="_blank"
                  >
                    The World Counts
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.involvementContentWrapper}>
        <div className={styles.involvementContent}>
          <b className={styles.howToBe}> How to be involved? </b>
        </div>
      </div>
      <div className={styles.constructionInfoContentWrapper}>
        <div className={styles.constructionInfoContent}>
          <div className={styles.underConstructionVia}>
            Under construction via openstreetmap
          </div>
          <div className={styles.workInProgress1Wrapper}>
            <img
              className={styles.workInProgress1Icon}
              loading="lazy"
              alt=""
              src="/workinprogress-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
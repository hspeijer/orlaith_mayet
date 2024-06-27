import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.pressMediaParent, className].join(" ")}>
      <div className={styles.pressMedia}>
        <div className={styles.creatingActionableFuturesContainer}>
          <p className={styles.creatingActionableFutures}>
            Creating Actionable Futures
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.theCenterOf}>
            The Center of Expertise for Creative Innovation (CoECI)
          </p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.rietveldReviewed2023}>
            Rietveld Review(ed) 2023
          </p>
          <p className={styles.blankLine2}>&nbsp;</p>
          <p className={styles.gerritRietveldAcademy}>
            Gerrit Rietveld Academy
          </p>
        </div>
        <button className={styles.titel}>
          <b className={styles.pressMedia1}>{`Press & Media`}</b>
        </button>
      </div>
      <div className={styles.revivezLinstant}>
        <div className={styles.passageLacteContainer}>
          <p className={styles.passageLacteIiInOut}>
            <b className={styles.passageLacte}>Passage à l'acte II!</b>
            <span> @ IN OUT, group exhibition - Lille (FR), 2024</span>
          </p>
          <p className={styles.blankLine3}>&nbsp;</p>
          <p className={styles.passageLacteRentreAn}>
            <b className={styles.passageLacte1}>Passage à l'acte!</b>
            <span>
              {" "}
              @ Rentrée Anarchiste de Lille, group exhibition -  Lille (FR),
              2023
            </span>
          </p>
          <p className={styles.blankLine4}>&nbsp;</p>
          <p className={styles.graduationExhibitionGerri}>
            <b className={styles.graduationExhibition}>Graduation Exhibition</b>
            <span> @  Gerrit Rietveld Academy - Amsterdam (NL), 2023</span>
          </p>
          <p className={styles.blankLine5}>&nbsp;</p>
          <p className={styles.thankYouForYourUnderstandi}>
            <b className={styles.thankYouFor}>
              Thank You for Your Understanding
            </b>
            <span>
              {" "}
              @ M4gastatelier, group exhibition - Amsterdam (NL), 2023
            </span>
          </p>
          <p className={styles.blankLine6}>&nbsp;</p>
          <p className={styles.asIfTheyKnowWhenSiteLo}>
            <b className={styles.asIfThey}>{`As if they know `}</b>
            <span>
              @ When site lost the plot, group exhibition - Amsterdam (NL), 2022
            </span>
          </p>
          <p className={styles.blankLine7}>&nbsp;</p>
          <p className={styles.p2OveramstelExhibitionGr}>
            <b className={styles.p2}>P2 </b>
            <span>
              {" "}
              @Overamstel Exhibition, group exhibition - Amsterdam (NL), 2021
            </span>
          </p>
          <p className={styles.blankLine8}>&nbsp;</p>
          <p className={styles.abecedarVilleDeMoulinsP}>
            <b className={styles.abecedar}>ABECEDAR</b>
            <span>
              {" "}
              @ Ville de Moulins, public art group exhibition - Moulins (FR),
              2015
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
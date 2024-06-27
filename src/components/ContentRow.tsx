import { FunctionComponent } from "react";
import ONItsWay from "./ONItsWay";
import NoMatter from "./NoMatter";
import Baver from "./Baver";
import styles from "./ContentRow.module.css";

export type ContentRowType = {
  className?: string;
};

const ContentRow: FunctionComponent<ContentRowType> = ({ className = "" }) => {
  return (
    <section className={[styles.contentRow, className].join(" ")}>
      <div className={styles.projectsGrid}>
        <ONItsWay onItsWay1="/2023-on-its-way-1@2x.png" onItsWay="On its way" />
        <ONItsWay
          onItsWay1="/2023-on-its-way-1-1@2x.png"
          onItsWay="Thesis: Human_Fallback"
          propLeft="349.5px"
        />
        <div className={styles.murphy}>
          <div className={styles.workProjectsOnItsWay}>
            <div className={styles.onItsWay1Wrapper}>
              <img
                className={styles.onItsWay1}
                loading="lazy"
                alt=""
                src="/2023-on-its-way-1-2@2x.png"
              />
            </div>
            <div className={styles.titel}>
              <div className={styles.dropMurphysConstant}>
                Drop Murphy’s Constant
              </div>
            </div>
          </div>
        </div>
        <NoMatter
          onItsWay1="/2023-on-its-way-1-3@2x.png"
          noMatter="No Matter"
        />
        <NoMatter
          onItsWay1="/2023-on-its-way-1-4@2x.png"
          noMatter="Watching the Watcher"
          propLeft="347px"
        />
        <NoMatter
          onItsWay1="/2023-on-its-way-1-5@2x.png"
          noMatter="In search of Noord"
          propLeft="694px"
        />
        <div className={styles.woodmanification}>
          <div className={styles.workProjectsOnItsWay1}>
            <img
              className={styles.onItsWay11}
              loading="lazy"
              alt=""
              src="/2023-on-its-way-1-6@2x.png"
            />
            <div className={styles.woodmanNificationWrapper}>
              <div className={styles.woodmanNification}>Woodmannification</div>
            </div>
          </div>
        </div>
        <Baver onItsWay1="/2023-on-its-way-1-7@2x.png" bver="Bäver" />
        <Baver
          onItsWay1="/2023-on-its-way-1-8@2x.png"
          bver="Multipass"
          propLeft="694px"
          propTop="589px"
        />
        <div className={styles.to1}>
          <div className={styles.workProjectsOnItsWay2}>
            <img
              className={styles.onItsWay12}
              loading="lazy"
              alt=""
              src="/2023-on-its-way-1-9@2x.png"
            />
            <div className={styles.to1InAnImaginaryWorldWrapper}>
              <div className={styles.to1In}>0 to 1 in an Imaginary World</div>
            </div>
          </div>
        </div>
        <div className={styles.lesNonDits}>
          <div className={styles.workProjectsOnItsWay3}>
            <img
              className={styles.onItsWay13}
              loading="lazy"
              alt=""
              src="/2023-on-its-way-1-10@2x.png"
            />
            <div className={styles.titel1}>
              <div className={styles.lesNonDits1}>Les Non-Dits</div>
            </div>
          </div>
        </div>
        <Baver
          onItsWay1="/2023-on-its-way-1-11@2x.png"
          bver="Brooming"
          propLeft="694px"
          propTop="886px"
        />
        <div className={styles.xyz}>
          <div className={styles.workProjectsOnItsWay4}>
            <img
              className={styles.onItsWay14}
              loading="lazy"
              alt=""
              src="/2023-on-its-way-1-12@2x.png"
            />
            <div className={styles.titel2}>
              <div className={styles.xyzpov}>xyzPOV</div>
            </div>
          </div>
        </div>
        <div className={styles.educationOfTodayAndTomorw}>
          <img
            className={styles.onItsWay15}
            loading="lazy"
            alt=""
            src="/2023-on-its-way-1-13@2x.png"
          />
          <div className={styles.educationTodayAndTomorrowWrapper}>
            <div className={styles.educationTodayAnd}>
              Education Today and Tomorrow
            </div>
          </div>
        </div>
        <div className={styles.medaillon}>
          <img
            className={styles.onItsWay16}
            loading="lazy"
            alt=""
            src="/2023-on-its-way-1-14@2x.png"
          />
          <div className={styles.medallionWrapper}>
            <div className={styles.medallion}>Medallion</div>
          </div>
        </div>
        <div className={styles.collages}>
          <img
            className={styles.onItsWay17}
            loading="lazy"
            alt=""
            src="/2023-on-its-way-1-15@2x.png"
          />
          <div className={styles.titel3}>
            <div className={styles.collages1}>Collages</div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.contactInfo}>
          <div className={styles.contactDetails}>
            <div className={styles.contactNewEmail}>
              Contact: NEW EMAIL ADDRESS!!!
            </div>
          </div>
          <div className={styles.collaborationInfo}>
            <div className={styles.collaborationDetails}>
              <div className={styles.websiteDesignedBy}>
                Website designed by Orlaith Mayet
              </div>
            </div>
            <div className={styles.feelFreeTo}>
              Feel free to reach out to collaborate on a project or just to say
              hi!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentRow;
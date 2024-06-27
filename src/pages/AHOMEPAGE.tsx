import { FunctionComponent } from "react";
import Header from "../components/Header";
import ContentRow from "../components/ContentRow";
import styles from "./AHOMEPAGE.module.css";

const AHOMEPAGE: FunctionComponent = () => {
  return (
    <div className={styles.aHomePage}>
      <Header />
      <img
        className={styles.cloudsecurityalliancecsaIcon}
        alt=""
        src="/cloudsecurityalliancecsa.svg"
      />
      <main className={styles.content}>
        <ContentRow />
      </main>
    </div>
  );
};

export default AHOMEPAGE;
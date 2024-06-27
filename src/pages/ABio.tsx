import { FunctionComponent } from "react";
import BackGroundIcon from "../components/BackGroundIcon";
import Header from "../components/Header1";
import styles from "./ABio.module.css";

const ABio: FunctionComponent = () => {
  return (
    <div className={styles.aBio}>
      <BackGroundIcon />
      <Header
        orlaithMayetAlignSelf="unset"
        orlaithMayetPosition="absolute"
        orlaithMayetTop="0px"
        orlaithMayetLeft="0px"
        orlaithMayetWidth="100%"
      />
    </div>
  );
};

export default ABio;
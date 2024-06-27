import { FunctionComponent } from "react";
import styles from "./BackGroundIcon.module.css";

export type BackGroundIconType = {
  className?: string;
};

const BackGroundIcon: FunctionComponent<BackGroundIconType> = ({
  className = "",
}) => {
  return (
    <img
      className={[styles.backGroundIcon, className].join(" ")}
      alt=""
      src="/back-ground@2x.png"
    />
  );
};

export default BackGroundIcon;
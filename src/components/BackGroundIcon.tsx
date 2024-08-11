import { FunctionComponent } from "react";

export type BackGroundIconType = {
  className?: string;
};

const BackGroundIcon: FunctionComponent<BackGroundIconType> = ({
  className = "",
}) => {
  return (
    <img
      className={`back-ground-icon ${className}`}
      alt=""
      src="/back-ground@2x.png"
    />
  );
};

export default BackGroundIcon;

import { FunctionComponent } from "react";
import Header from "../components/Header";
import BackGroundIcon from "../components/BackGroundIcon";
import "./DesktopBio1920px.css";

const DesktopBio1920px: FunctionComponent = () => {
  return (
    <div className="desktop-bio-1920px">
      <Header navigationFlex="unset" navigationAlignSelf="stretch" />
      <div className="background-container">
        <BackGroundIcon />
      </div>
    </div>
  );
};

export default DesktopBio1920px;

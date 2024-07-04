import { FunctionComponent } from "react";
import Main from "../components/Main";
import Content from "../components/Content";
import DesktopFooter from "../components/DesktopFooter";
import "./DesktopPress1920px.css";

const DesktopPress1920px: FunctionComponent = () => {
  return (
    <div className="desktop-press-1920px">
      <Main />
      <div className="header">
        <div className="work">
          <b className="workprojects">Work/Projects</b>
        </div>
        <div className="map">
          <b className="map1">Map</b>
        </div>
        <div className="bio">
          <b className="bio1">Bio</b>
        </div>
        <div className="press">
          <b className="press1">Press</b>
        </div>
        <img
          className="home-page-yellow-triangle-with"
          alt=""
          src="/home-page-yellow-triangle-with-name-2@2x.png"
        />
      </div>
      <Content />
      <DesktopFooter />
    </div>
  );
};

export default DesktopPress1920px;

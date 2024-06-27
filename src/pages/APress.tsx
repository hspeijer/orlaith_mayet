import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import "./APress.css";

const APress: FunctionComponent = () => {
  return (
    <div className="a-press">
      <Header
        orlaithMayetAlignSelf="stretch"
        orlaithMayetPosition="unset"
        orlaithMayetTop="unset"
        orlaithMayetLeft="unset"
        orlaithMayetWidth="unset"
      />
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
      <section className="a-press-inner">
        <div className="frame-parent">
          <button className="exposition-wrapper">
            <b className="exposition">Exposition</b>
          </button>
          <FrameComponent1 />
        </div>
      </section>
    </div>
  );
};

export default APress;

import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import DesktopFooter from "../components/DesktopFooter";
import "./DesktopMap1920px.css";

const DesktopMap1920px: FunctionComponent = () => {
  return (
    <div className="desktop-map-1920px">
      <div className="image-9" />
      <div className="footer-content" />
      <Header navigationFlex="unset" navigationAlignSelf="stretch" />
      <div className="header1">
        <div className="work1">
          <b className="workprojects1">Work/Projects</b>
        </div>
        <div className="map2">
          <b className="map3">Map</b>
        </div>
        <div className="bio2">
          <b className="bio3">Bio</b>
        </div>
        <div className="press2">
          <b className="press3">Press</b>
        </div>
        <img
          className="home-page-yellow-triangle-with1"
          alt=""
          src="/home-page-yellow-triangle-with-name-2@2x.png"
        />
      </div>
      <main className="services-content">
        <FrameComponent1 />
        <FrameComponent />
        <div className="component-wrapper">
          <div className="component">
            <b className="how-to-get">{`How to get involved? `}</b>
          </div>
        </div>
        <section className="metaverse-slogan">
          <div className="construction-info">
            <div className="under-construction-via">
              Under construction via openstreetmap
            </div>
          </div>
          <div className="contact-banner">
            <img
              className="work-in-progress-1-icon"
              loading="lazy"
              alt=""
              src="/workinprogress-1@2x.png"
            />
          </div>
        </section>
      </main>
      <DesktopFooter />
    </div>
  );
};

export default DesktopMap1920px;

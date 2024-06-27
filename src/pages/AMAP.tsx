import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import "./AMAP.css";

const AMAP: FunctionComponent = () => {
  return (
    <div className="a-map">
      <Header />
      <div className="side-bar">
        <div className="search-bar-parent">
          <div className="search-bar">
            <div className="search">search</div>
          </div>
          <h2 className="waste-map">Waste Map</h2>
        </div>
      </div>
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
      <main className="interactive-map-content-parent">
        <section className="interactive-map-content">
          <div className="wrapper-interactive-map">
            <img
              className="interactive-map-icon"
              loading="lazy"
              alt=""
              src="/interactive-map@2x.png"
            />
          </div>
          <div className="legend">
            <b className="legend1">Legend:</b>
            <div className="under-construction">
              <p className="under-construction1">UNDER CONSTRUCTION</p>
            </div>
          </div>
        </section>
        <div className="waste-message">
          <div className="while-waste-is">
            While waste is piling up, we are running out of solutions. This
            initiative is a collaborative map of scrapyard / recycling
            facilities of free resources such as wood, metal, electronic
            components, insulation materials, what have you. You are also
            invited to participate and add places and materials to the map
            yourself. Legend and details to find materials and add locations can
            be found below the map, in the “how to get involved” section. 
          </div>
        </div>
        <FrameComponent />
      </main>
    </div>
  );
};

export default AMAP;

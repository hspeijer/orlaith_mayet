import { FunctionComponent } from "react";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={`portfolio-content-wrapper ${className}`}>
      <div className="portfolio-content">
        <div className="project-card-one">
          <div className="projects-content">
            <div className="explore-button">
              <h1 className="waste-map">Waste Map</h1>
            </div>
            <div className="search-bar">
              <a className="search">search</a>
            </div>
          </div>
          <div className="metaverse-content">
            <div className="while-waste-is">
              While waste is piling up, we are running out of solutions. This
              initiative is a collaborative map of scrapyard / recycling
              facilities of free resources such as wood, metal, electronic
              components, insulation materials, what have you. You are also
              invited to participate and add places and materials to the map
              yourself. Legend and details to find materials and add locations
              can be found below the map, in the “how to get involved” section. 
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="map-container">
            <div className="wrapper-interactive-map">
              <iframe width="1000" height="350"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=4.46422576904297%2C52.25428846751517%2C5.037574768066407%2C52.44178076592579&amp;layer=mapnik"
                      ></iframe>
            </div>
            <textarea className="image-91" rows={15} cols={20}/>
          </div>
          <div className="legend">
            <b className="legend1">Legend:</b>
            <div className="under-construction">
              <p className="under-construction1">UNDER CONSTRUCTION</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;

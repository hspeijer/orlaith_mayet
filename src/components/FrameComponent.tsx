import { FunctionComponent } from "react";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={`slider-content-parent ${className}`}>
      <div className="slider-content">
        <div className="slider-imiges">
          <div className="image-slider-map">
            <div className="wrapper">
              <img className="icon" loading="lazy" alt="" src="/1@2x.png" />
            </div>
            <div className="frame-container">
              <img className="frame-child" alt="" src="/frame-243@2x.png" />
              <img
                className="frame-item"
                loading="lazy"
                alt=""
                src="/frame-244@2x.png"
              />
            </div>
            <img
              className="image-slider-map-child"
              loading="lazy"
              alt=""
              src="/frame-245@2x.png"
            />
            <img
              className="image-slider-map-item"
              loading="lazy"
              alt=""
              src="/frame-246@2x.png"
            />
          </div>
          <div className="project-description">
            <div className="i-started-this">
              I started this map after the project “No Matter” (see
              Work/Projects), in order to share my tips to find materials,
              sometimes in the street, on construction sites, in the “free”
              section of websites where people sell their stuff such as
              Marktplaats, Le Bon Coin. At other times just by asking the
              manufacturer for their leftovers. The map only gives the
              locations, in order to get the material you have to enquire
              directly on site.
            </div>
            <div className="waste-statistics">
              <div className="tons-of-waste-container">
                <p className="p">236,281,118</p>
                <p className="tons-of-waste">Tons of waste dumped</p>
                <p className="globally-this-year">globally, this year</p>
                <p className="the-world-counts">
                  <a
                    className="the-world-counts1"
                    href="https://www.theworldcounts.com//challenges/waste/global-waste-problem"
                    target="_blank"
                  >
                    The World Counts
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="involvement-content-wrapper">
        <div className="involvement-content">
          <b className="how-to-be"> How to be involved? </b>
        </div>
      </div>
      <div className="construction-info-content-wrapper">
        <div className="construction-info-content">
          <div className="under-construction-via">
            Under construction via openstreetmap
          </div>
          <div className="work-in-progress-1-wrapper">
            <img
              className="work-in-progress-1-icon"
              loading="lazy"
              alt=""
              src="/workinprogress-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;

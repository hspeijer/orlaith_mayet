import { FunctionComponent } from "react";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={`project-info-wrapper ${className}`}>
      <div className="project-info">
        <div className="image-slider-map">
          <img
            className="slide-placeholder-icon"
            loading="lazy"
            alt=""
            src="/1@2x.png"
          />
          <div className="slide-content">
            <img
              className="slide-element-icon"
              alt=""
              src="/slide-element@2x.png"
            />
            <img
              className="slide-element-icon1"
              loading="lazy"
              alt=""
              src="/frame-244@2x.png"
            />
          </div>
          <img
            className="slide-placeholder-icon1"
            loading="lazy"
            alt=""
            src="/frame-245@2x.png"
          />
          <img
            className="slide-placeholder-icon2"
            loading="lazy"
            alt=""
            src="/frame-246@2x.png"
          />
        </div>
        <div className="project-description">
          <div className="i-started-this-map-after-the-p-parent">
            <div className="i-started-this">
              I started this map after the project “No Matter” (see
              Work/Projects), in order to share my tips to find materials,
              sometimes in the street, on construction sites, in the “free”
              section of websites where people sell their stuff such as
              Marktplaats, Le Bon Coin. At other times just by asking the
              manufacturer for their leftovers.
            </div>
            <div className="the-map-only">
              The map only gives the locations, in order to get the material you
              need to enquire directly on site.
            </div>
          </div>
          <div className="waste-statistic">
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
    </section>
  );
};

export default FrameComponent;

import { FunctionComponent } from "react";
import ONItsWay from "./ONItsWay";
import NoMatter from "./NoMatter";
import Baver from "./Baver";
import "./ContentRow.css";

export type ContentRowType = {
  className?: string;
};

const ContentRow: FunctionComponent<ContentRowType> = ({ className = "" }) => {
  return (
    <section className={`content-row ${className}`}>
      <div className="projects-grid">
        <ONItsWay onItsWay1="/2023-on-its-way-1@2x.png" onItsWay="On its way" />
        <ONItsWay
          onItsWay1="/2023-on-its-way-1-1@2x.png"
          onItsWay="Thesis: Human_Fallback"
          propLeft="349.5px"
        />
        <div className="murphy">
          <div className="work-projects-on-its-way3">
            <div className="on-its-way-1-wrapper">
              <img
                className="on-its-way-13"
                loading="lazy"
                alt=""
                src="/2023-on-its-way-1-2@2x.png"
              />
            </div>
            <div className="titel2">
              <div className="drop-murphys-constant">
                Drop Murphy’s Constant
              </div>
            </div>
          </div>
        </div>
        <NoMatter
          onItsWay1="/2023-on-its-way-1-3@2x.png"
          noMatter="No Matter"
        />
        <NoMatter
          onItsWay1="/2023-on-its-way-1-4@2x.png"
          noMatter="Watching the Watcher"
          propLeft="347px"
        />
        <NoMatter
          onItsWay1="/2023-on-its-way-1-5@2x.png"
          noMatter="In search of Noord"
          propLeft="694px"
        />
        <div className="woodmanification">
          <div className="work-projects-on-its-way4">
            <img
              className="on-its-way-14"
              loading="lazy"
              alt=""
              src="/2023-on-its-way-1-6@2x.png"
            />
            <div className="woodman-nification-wrapper">
              <div className="woodman-nification">Woodmannification</div>
            </div>
          </div>
        </div>
        <Baver onItsWay1="/2023-on-its-way-1-7@2x.png" bver="Bäver" />
        <Baver
          onItsWay1="/2023-on-its-way-1-8@2x.png"
          bver="Multipass"
          propLeft="694px"
          propTop="589px"
        />
        <div className="to-1">
          <div className="work-projects-on-its-way5">
            <img
              className="on-its-way-15"
              loading="lazy"
              alt=""
              src="/2023-on-its-way-1-9@2x.png"
            />
            <div className="to-1-in-an-imaginary-world-wrapper">
              <div className="to-1-in">0 to 1 in an Imaginary World</div>
            </div>
          </div>
        </div>
        <div className="les-non-dits">
          <div className="work-projects-on-its-way6">
            <img
              className="on-its-way-16"
              loading="lazy"
              alt=""
              src="/2023-on-its-way-1-10@2x.png"
            />
            <div className="titel3">
              <div className="les-non-dits1">Les Non-Dits</div>
            </div>
          </div>
        </div>
        <Baver
          onItsWay1="/2023-on-its-way-1-11@2x.png"
          bver="Brooming"
          propLeft="694px"
          propTop="886px"
        />
        <div className="xyz">
          <div className="work-projects-on-its-way7">
            <img
              className="on-its-way-17"
              loading="lazy"
              alt=""
              src="/2023-on-its-way-1-12@2x.png"
            />
            <div className="titel4">
              <div className="xyzpov">xyzPOV</div>
            </div>
          </div>
        </div>
        <div className="education-of-today-and-tomorw">
          <img
            className="on-its-way-18"
            loading="lazy"
            alt=""
            src="/2023-on-its-way-1-13@2x.png"
          />
          <div className="education-today-and-tomorrow-wrapper">
            <div className="education-today-and">
              Education Today and Tomorrow
            </div>
          </div>
        </div>
        <div className="medaillon">
          <img
            className="on-its-way-19"
            loading="lazy"
            alt=""
            src="/2023-on-its-way-1-14@2x.png"
          />
          <div className="medallion-wrapper">
            <div className="medallion">Medallion</div>
          </div>
        </div>
        <div className="collages">
          <img
            className="on-its-way-110"
            loading="lazy"
            alt=""
            src="/2023-on-its-way-1-15@2x.png"
          />
          <div className="titel5">
            <div className="collages1">Collages</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="contact-info">
          <div className="contact-details">
            <div className="contact-new-email">
              Contact: NEW EMAIL ADDRESS!!!
            </div>
          </div>
          <div className="collaboration-info">
            <div className="collaboration-details">
              <div className="website-designed-by">
                Website designed by Orlaith Mayet
              </div>
            </div>
            <div className="feel-free-to">
              Feel free to reach out to collaborate on a project or just to say
              hi!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentRow;

import { FunctionComponent } from "react";
import Header from "../components/Header";
import OnItsWay from "../components/OnItsWay";
import ThesisHumaFallback from "../components/ThesisHumaFallback";
import DesktopFooter from "../components/DesktopFooter";
import "./DesktopHomePage1920px.css";

const DesktopHomePage1920px: FunctionComponent = () => {
  return (
    <div className="desktop-home-page-1920px">
      <Header navigationFlex="unset" navigationAlignSelf="stretch" />
      <main className="content">
        <section className="grid">
          <div className="grid-workprojects">
            <div className="project-item">
              <OnItsWay
                sourceImage="/source-image@2x.png"
                inputTitel="On its way"
              />
              <ThesisHumaFallback
                sourceImage="/source-image-1@2x.png"
                inputTitel="Thesis: Human_Fallback"
              />
              <OnItsWay
                sourceImage="/source-image-2@2x.png"
                inputTitel="Drop Murphy’s Constant"
                propLeft="866px"
                propPadding="122px 18px 102px"
                propTop="0px"
              />
              <ThesisHumaFallback
                sourceImage="/source-image-3@2x.png"
                inputTitel="No Matter"
                propTop="320px"
                propLeft="0px"
              />
              <ThesisHumaFallback
                sourceImage="/source-image-4@2x.png"
                inputTitel="Watching the Watcher"
                propTop="320px"
                propLeft="433px"
              />
              <ThesisHumaFallback
                sourceImage="/source-image-5@2x.png"
                inputTitel="In search of Noord"
                propTop="320px"
                propLeft="866px"
              />
              <ThesisHumaFallback
                sourceImage="/source-image-6@2x.png"
                inputTitel="Woodman-nification"
                propTop="640px"
                propLeft="0px"
              />
              <ThesisHumaFallback
                sourceImage="/source-image-7@2x.png"
                inputTitel="Bäver"
                propTop="640px"
                propLeft="433px"
              />
              <OnItsWay
                sourceImage="/source-image-8@2x.png"
                inputTitel="Multipass"
                propLeft="866px"
                propPadding="138.5px 18px 118.5px"
                propTop="640px"
              />
              <OnItsWay
                sourceImage="/source-image-9@2x.png"
                inputTitel="0 to 1 in an Imaginary World"
                propLeft="0px"
                propPadding="122px 18px 102px"
                propTop="960px"
              />
              <OnItsWay
                sourceImage="/source-image-10@2x.png"
                inputTitel="Les Non-Dits"
                propLeft="433px"
                propPadding="138.5px 18px 118.5px"
                propTop="960px"
              />
              <ThesisHumaFallback
                sourceImage="/source-image-11@2x.png"
                inputTitel="Brooming"
                propTop="960px"
                propLeft="866px"
              />
              <OnItsWay
                sourceImage="/source-image-12@2x.png"
                inputTitel="xyzPOV"
                propLeft="0px"
                propPadding="138.5px 18px 118.5px"
                propTop="1280px"
              />
              <ThesisHumaFallback
                sourceImage="/source-image-13@2x.png"
                inputTitel="Education Today and Tomorrow"
                propTop="1280px"
                propLeft="433px"
              />
              <ThesisHumaFallback
                sourceImage="/source-image-14@2x.png"
                inputTitel="Medallion"
                propTop="1280px"
                propLeft="866px"
              />
              <OnItsWay
                sourceImage="/source-image-15@2x.png"
                inputTitel="Collages"
                propLeft="0px"
                propPadding="138.5px 18px 118.5px"
                propTop="1600px"
              />
            </div>
          </div>
        </section>
        <DesktopFooter />
      </main>
    </div>
  );
};

export default DesktopHomePage1920px;

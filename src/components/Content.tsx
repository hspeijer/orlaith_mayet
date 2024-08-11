import { FunctionComponent } from "react";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={`content1 ${className}`}>
      <div className="exhibition">
        <div className="passage-lacte-ii-in-out-parent">
          <div className="passage-lacte-container">
            <p className="passage-lacte-ii">
              <b>
                <span>Passage à l'acte II!</span>
                <span className="span">{` `}</span>
              </b>
            </p>
            <p className="in-out-group">
              @ IN OUT, group exhibition - Lille (FR), 2024
            </p>
          </div>
          <div className="passage-lacte-container1">
            <p className="passage-lacte">
              <b>{`Passage à l'acte! `}</b>
            </p>
            <p className="rentre-anarchiste-de">
              @ Rentrée Anarchiste de Lille, group exhibition -  Lille (FR),
              2023
            </p>
          </div>
          <div className="graduation-exhibition-gerri-container">
            <p className="graduation-exhibition">
              <b>
                <span>Graduation Exhibition</span>
                <span className="span1">{` `}</span>
              </b>
            </p>
            <p className="gerrit-rietveld-academy">
              @  Gerrit Rietveld Academy - Amsterdam (NL), 2023
            </p>
          </div>
          <div className="thank-you-for-container">
            <p className="thank-you-for-your-understandi">
              <b>Thank You for Your Understanding</b>
            </p>
            <p className="m4gastatelier-group-exhibitio">
              @  M4gastatelier, group exhibition - Amsterdam (NL), 2023
            </p>
          </div>
          <div className="as-if-they-container">
            <p className="as-if-they-know">
              <b>As if they know</b>
            </p>
            <p className="when-site-lost">
              @  When site lost the plot, group exhibition - Amsterdam (NL),
              2022
            </p>
          </div>
          <div className="p2-overamstel-container">
            <p className="p2">
              <b>P2 </b>
            </p>
            <p className="overamstel-exhibition-group">
              @ Overamstel Exhibition, group exhibition - Amsterdam (NL), 2021
            </p>
          </div>
          <div className="abecedar-ville-container">
            <p className="abecedar">
              <b>{`ABECEDAR `}</b>
            </p>
            <p className="ville-de-moulins">
              @ Ville de Moulins, public art group exhibition - Moulins (FR),
              2015
            </p>
          </div>
          <button className="exposition-wrapper">
            <b className="exposition">Exposition</b>
          </button>
        </div>
        <div className="press-media">
          <div className="press-media1">
            <div className="creating-actionable-futures-container">
              <p className="creating-actionable-futures">
                Creating Actionable Futures
              </p>
              <p className="blank-line">&nbsp;</p>
              <p className="the-center-of">
                The Center of Expertise for Creative Innovation (CoECI)
              </p>
              <p className="blank-line1">&nbsp;</p>
              <p className="rietveld-reviewed-2023">Rietveld Review(ed) 2023</p>
              <p className="blank-line2">&nbsp;</p>
              <p className="gerrit-rietveld-academie">
                Gerrit Rietveld Academie
              </p>
            </div>
            <button className="titel">
              <b className="press-media2">{`Press & Media`}</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;

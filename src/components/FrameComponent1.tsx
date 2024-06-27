import { FunctionComponent } from "react";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={`press-media-parent ${className}`}>
      <div className="press-media">
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
          <p className="gerrit-rietveld-academy">Gerrit Rietveld Academy</p>
        </div>
        <button className="titel6">
          <b className="press-media1">{`Press & Media`}</b>
        </button>
      </div>
      <div className="revivez-linstant">
        <div className="passage-lacte-container">
          <p className="passage-lacte-ii-in-out">
            <b className="passage-lacte">Passage à l'acte II!</b>
            <span> @ IN OUT, group exhibition - Lille (FR), 2024</span>
          </p>
          <p className="blank-line3">&nbsp;</p>
          <p className="passage-lacte-rentre-an">
            <b className="passage-lacte1">Passage à l'acte!</b>
            <span>
              {" "}
              @ Rentrée Anarchiste de Lille, group exhibition -  Lille (FR),
              2023
            </span>
          </p>
          <p className="blank-line4">&nbsp;</p>
          <p className="graduation-exhibition-gerri">
            <b className="graduation-exhibition">Graduation Exhibition</b>
            <span> @  Gerrit Rietveld Academy - Amsterdam (NL), 2023</span>
          </p>
          <p className="blank-line5">&nbsp;</p>
          <p className="thank-you-for-your-understandi">
            <b className="thank-you-for">Thank You for Your Understanding</b>
            <span>
              {" "}
              @ M4gastatelier, group exhibition - Amsterdam (NL), 2023
            </span>
          </p>
          <p className="blank-line6">&nbsp;</p>
          <p className="as-if-they-know-when-site-lo">
            <b className="as-if-they">{`As if they know `}</b>
            <span>
              @ When site lost the plot, group exhibition - Amsterdam (NL), 2022
            </span>
          </p>
          <p className="blank-line7">&nbsp;</p>
          <p className="p2-overamstel-exhibition-gr">
            <b className="p2">P2 </b>
            <span>
              {" "}
              @Overamstel Exhibition, group exhibition - Amsterdam (NL), 2021
            </span>
          </p>
          <p className="blank-line8">&nbsp;</p>
          <p className="abecedar-ville-de-moulins-p">
            <b className="abecedar">ABECEDAR</b>
            <span>
              {" "}
              @ Ville de Moulins, public art group exhibition - Moulins (FR),
              2015
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;

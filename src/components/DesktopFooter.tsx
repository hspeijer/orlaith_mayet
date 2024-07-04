import { FunctionComponent } from "react";
import "./DesktopFooter.css";

export type DesktopFooterType = {
  className?: string;
};

const DesktopFooter: FunctionComponent<DesktopFooterType> = ({
  className = "",
}) => {
  return (
    <section className={`desktop-footer ${className}`}>
      <div className="wrapper-vector-18">
        <img className="wrapper-vector-18-child" alt="" src="/logo.svg" />
      </div>
      <div className="website-info">
        <div className="website-designed-by">
          Website designed by Orlaith Mayet
        </div>
      </div>
      <div className="contact">
        <div className="contact-infoorlaithmayetart">
          Contact: info@orlaithmayet.art
        </div>
        <div className="feel-free-to">
          Feel free to contact me for discussing a commission, purchase an
          artwork or if you have any questions.
        </div>
      </div>
    </section>
  );
};

export default DesktopFooter;

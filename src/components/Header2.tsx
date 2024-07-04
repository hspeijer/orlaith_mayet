import { FunctionComponent } from "react";
import "./Header2.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={`header4 ${className}`}>
      <h2 className="orlaith-mayet2">Orlaith Mayet</h2>
      <nav className="navigation1">
        <nav className="menu">
          <div className="work-item">
            <div className="work4">
              <a className="workprojects4">Work/Projects</a>
            </div>
          </div>
          <div className="map8">
            <a className="map9">Map</a>
          </div>
          <div className="bio8">
            <a className="bio9">Bio</a>
          </div>
          <div className="press-item1">
            <div className="press8">
              <a className="press9">Press</a>
            </div>
          </div>
        </nav>
      </nav>
    </header>
  );
};

export default Header;

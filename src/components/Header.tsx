import { FunctionComponent } from "react";
import "./Header.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={`header2 ${className}`}>
      <h1 className="orlaith-mayet">Orlaith Mayet</h1>
      <nav className="navigation">
        <nav className="navigation-column">
          <div className="navigation-item">
            <div className="work2">
              <a className="workprojects2">Work/Projects</a>
            </div>
          </div>
          <div className="map4">
            <a className="map5">Map</a>
          </div>
          <div className="bio4">
            <a className="bio5">Bio</a>
          </div>
          <div className="press-item">
            <div className="press4">
              <a className="press5">Press</a>
            </div>
          </div>
        </nav>
      </nav>
    </header>
  );
};

export default Header;

import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Header.css";

export type HeaderType = {
  className?: string;

  /** Style props */
  navigationFlex?: CSSProperties["flex"];
  navigationAlignSelf?: CSSProperties["alignSelf"];
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  navigationFlex,
  navigationAlignSelf,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      flex: navigationFlex,
      alignSelf: navigationAlignSelf,
    };
  }, [navigationFlex, navigationAlignSelf]);

  return (
    <header className={`header2 ${className}`} style={headerStyle}>
      <h1 className="orlaith-mayet">Orlaith Mayet</h1>
      <nav className="navigation">
        <nav className="work-link">
          <div className="work-instance">
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
          <div className="press-link">
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

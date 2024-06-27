import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Header1.css";

export type HeaderType = {
  className?: string;

  /** Style props */
  orlaithMayetAlignSelf?: CSSProperties["alignSelf"];
  orlaithMayetPosition?: CSSProperties["position"];
  orlaithMayetTop?: CSSProperties["top"];
  orlaithMayetLeft?: CSSProperties["left"];
  orlaithMayetWidth?: CSSProperties["width"];
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  orlaithMayetAlignSelf,
  orlaithMayetPosition,
  orlaithMayetTop,
  orlaithMayetLeft,
  orlaithMayetWidth,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: orlaithMayetAlignSelf,
      position: orlaithMayetPosition,
      top: orlaithMayetTop,
      left: orlaithMayetLeft,
      width: orlaithMayetWidth,
    };
  }, [
    orlaithMayetAlignSelf,
    orlaithMayetPosition,
    orlaithMayetTop,
    orlaithMayetLeft,
    orlaithMayetWidth,
  ]);

  return (
    <header className={`header3 ${className}`} style={headerStyle}>
      <h2 className="orlaith-mayet1">Orlaith Mayet</h2>
      <nav className="main-content">
        <nav className="frame-group">
          <div className="work-wrapper">
            <div className="work3">
              <a className="workprojects3">Work/Projects</a>
            </div>
          </div>
          <div className="map6">
            <a className="map7">Map</a>
          </div>
          <div className="bio6">
            <a className="bio7">Bio</a>
          </div>
          <div className="press-wrapper">
            <div className="press6">
              <a className="press7">Press</a>
            </div>
          </div>
        </nav>
      </nav>
    </header>
  );
};

export default Header;

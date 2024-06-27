import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./NoMatter.css";

export type NoMatterType = {
  className?: string;
  onItsWay1?: string;
  noMatter?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const NoMatter: FunctionComponent<NoMatterType> = ({
  className = "",
  onItsWay1,
  noMatter,
  propLeft,
}) => {
  const noMatterStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={`no-matter ${className}`} style={noMatterStyle}>
      <div className="work-projects-on-its-way1">
        <img className="on-its-way-11" loading="lazy" alt="" src={onItsWay1} />
        <div className="titel1">
          <div className="no-matter1">{noMatter}</div>
        </div>
      </div>
    </div>
  );
};

export default NoMatter;

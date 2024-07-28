import React, { FunctionComponent } from "react";
import Main from "../components/Main";
import Content from "../components/Content";
import DesktopFooter from "../components/DesktopFooter";
import "./DesktopPress1920px.css";

const DesktopPress1920px: FunctionComponent = () => {
  return (
    <div className="desktop-press-1920px">
      <Main />
      <Content />
      <DesktopFooter />
    </div>
  );
};

export default DesktopPress1920px;

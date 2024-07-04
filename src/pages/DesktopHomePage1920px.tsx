import { FunctionComponent } from "react";
import Header from "../components/Header2";
import GridWorkProjects from "../components/GridWorkProjects";
import DesktopFooter from "../components/DesktopFooter";
import "./DesktopHomePage1920px.css";

const DesktopHomePage1920px: FunctionComponent = () => {
  return (
    <div className="desktop-home-page-1920px">
      <Header />
      <main className="content1">
        <section className="grid">
          <GridWorkProjects />
        </section>
        <DesktopFooter />
      </main>
    </div>
  );
};

export default DesktopHomePage1920px;

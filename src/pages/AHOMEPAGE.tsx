import { FunctionComponent } from "react";
import Header from "../components/Header";
import ContentRow from "../components/ContentRow";
import "./AHOMEPAGE.css";

const AHOMEPAGE: FunctionComponent = () => {
  return (
    <div className="a-home-page">
      <Header />
      <img
        className="cloudsecurityalliancecsa-icon"
        alt=""
        src="/cloudsecurityalliancecsa.svg"
      />
      <main className="content">
        <ContentRow />
      </main>
    </div>
  );
};

export default AHOMEPAGE;

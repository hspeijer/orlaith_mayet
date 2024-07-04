import { FunctionComponent } from "react";
import Header from "./Header";
import "./Main.css";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <section className={`main ${className}`}>
      <Header />
    </section>
  );
};

export default Main;

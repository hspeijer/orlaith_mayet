import { FunctionComponent } from "react";
import BackGroundIcon from "../components/BackGroundIcon";
import Header from "../components/Header";
import "./ABio.css";

const ABio: FunctionComponent = () => {
  return (
    <div className="a-bio">
      <BackGroundIcon />
      <Header
        orlaithMayetAlignSelf="unset"
        orlaithMayetPosition="absolute"
        orlaithMayetTop="0px"
        orlaithMayetLeft="0px"
        orlaithMayetWidth="100%"
      />
    </div>
  );
};

export default ABio;

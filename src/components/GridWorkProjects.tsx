import { FunctionComponent } from "react";
import GridItems from "./GridItems";
import "./GridWorkProjects.css";

export type GridWorkProjectsType = {
  className?: string;
};

const GridWorkProjects: FunctionComponent<GridWorkProjectsType> = ({
  className = "",
}) => {
  return (
    <div className={`grid-workprojects ${className}`}>
      <div className="project-item">
        <GridItems sourceImage="/source-image@2x.png" inputTitel="On its way" />
        <GridItems
          sourceImage="/source-image-1@2x.png"
          inputTitel="Thesis: Human_Fallback"
          propLeft="433px"
          propPadding="122px 18px 102px"
          propTop="0px"
        />
        <GridItems
          sourceImage="/source-image-2@2x.png"
          inputTitel="Drop Murphy’s Constant"
        />
        <GridItems
          sourceImage="/source-image-3@2x.png"
          inputTitel="No Matter"
          propLeft="0px"
          propPadding="138.5px 18px 118.5px"
          propTop="320px"
        />
        <GridItems
          sourceImage="/source-image-4@2x.png"
          inputTitel="Watching the Watcher"
          propTop="320px"
          propLeft="433px"
        />
        <GridItems
          sourceImage="/source-image-5@2x.png"
          inputTitel="In search of Noord"
          propLeft="866px"
          propPadding="138.5px 18px 118.5px"
          propTop="320px"
        />
        <GridItems
          sourceImage="/source-image-6@2x.png"
          inputTitel="Woodman-nification"
          propTop="640px"
          propLeft="0px"
        />
        <GridItems
          sourceImage="/source-image-7@2x.png"
          inputTitel="Bäver"
          propTop="640px"
          propLeft="433px"
        />
        <GridItems
          sourceImage="/source-image-8@2x.png"
          inputTitel="Multipass"
          propTop="640px"
          propLeft="866px"
        />
        <GridItems
          sourceImage="/source-image-9@2x.png"
          inputTitel="0 to 1 in an Imaginary World"
          propTop="960px"
          propLeft="0px"
        />
        <GridItems
          sourceImage="/source-image-10@2x.png"
          inputTitel="Les Non-Dits"
          propTop="960px"
          propLeft="433px"
        />
        <GridItems
          sourceImage="/source-image-11@2x.png"
          inputTitel="Brooming"
          propLeft="866px"
          propPadding="138.5px 18px 118.5px"
          propTop="960px"
        />
        <GridItems
          sourceImage="/source-image-12@2x.png"
          inputTitel="xyzPOV"
          propLeft="0px"
          propPadding="138.5px 18px 118.5px"
          propTop="1280px"
        />
        <GridItems
          sourceImage="/source-image-13@2x.png"
          inputTitel="Education Today and Tomorrow"
          propTop="1280px"
          propLeft="433px"
        />
        <GridItems
          sourceImage="/source-image-14@2x.png"
          inputTitel="Medallion"
          propTop="1280px"
          propLeft="866px"
        />
        <GridItems
          sourceImage="/source-image-15@2x.png"
          inputTitel="Collages"
          propLeft="0px"
          propPadding="138.5px 18px 118.5px"
          propTop="1600px"
        />
      </div>
    </div>
  );
};

export default GridWorkProjects;

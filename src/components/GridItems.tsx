import React, {FunctionComponent, useMemo, type CSSProperties, useState, useRef, useEffect} from "react";
import {Carousel, Drawer} from "antd"
import "./GridItem.css";

export type OnItsWayType = {
  className?: string;
  sourceImage?: string;
  inputTitel?: string;
  projectDescription?: string
    images? : string []
};

const GridItems: FunctionComponent<OnItsWayType> = ({
  className = "",
  sourceImage,
  inputTitel,
  projectDescription,
                                                        images
}) => {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState(0)

    const ref = useRef(null)

    console.log("Images", images)

    useEffect(() => {
        if(ref.current != null) {
            setHeight(ref.current.clientHeight)
            console.log(ref.current.clientHeight)
        }
    })

  function showCarousel() {
    setOpen(true)
  }

  function closeDrawer() {
      setOpen(false)
  }

    let heigthStyle = {
      height: height + "px"
    }

    return (
    <div className={`on-its-way ${className}`}>
      <div className="project-images" />
      <img
        className="source-image-icon"
        loading="lazy"
        alt=""
        src={sourceImage}
      />
      <div className="input-titel-30px" onClick={showCarousel}>
        <div className="input-titel">{inputTitel}</div>
      </div>
        <Drawer
            placement="top"
            open={open}
            className={"carousel"}
            closeIcon={null}
            mask={false}
            height={"90%"}
        >
            <div className={"carousel-container"} id={"redbox"} ref={ref}>
                <Carousel
                    arrows={true}
                >
                    {images && images.map((image, index) => {
                        return(<div key={index}><img className="slide" src={image}/></div>)
                    })}
                </Carousel>
            </div>
            <img className="closeButton" onClick={closeDrawer} src={"public/close.svg"}/>
            <div className="slides-title">{inputTitel}</div>
            <div className="slides-subtitle">{projectDescription}</div>
        </Drawer>
    </div>
  );
};

export default GridItems;

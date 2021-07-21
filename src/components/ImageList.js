import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = function (props) {
  const images = props.images.map((img) => {
    return <ImageCard key={img.id} image={img} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;

import React from "react";

const ImageList = (props) => {
  //console.log(props.images);
  const images = props.images.map(({ urls, description, id }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;

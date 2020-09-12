import React, { useState, useEffect } from "react";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";
import image7 from "../images/7.jpg";
import image8 from "../images/8.jpg";

const SingleProperty = (props) => {
  const [currImage, setCurrImage] = useState(0);
  useEffect(() => {
    setCurrImage(Math.floor(Math.random() * 10));
  }, []);
  return (
    <div className="property">
      <img
        className="houseImage"
        src={require(`../images/${currImage}.jpg`)}
        alt="house"
      />
      <h1>Address: {props.property.name}</h1>
      <p>Number of Rooms: {props.property.numberOfRooms}</p>
      <p>Created By: {props.property.createdBy}</p>
    </div>
  );
};

export default SingleProperty;

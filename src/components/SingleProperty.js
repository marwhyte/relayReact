import React, { useState, useEffect } from "react";
import deleteProperty from "../mutations/deletePropertyMutation";
import { graphql } from "react-relay";

const SingleProperty = (props) => {
  const [currImage, setCurrImage] = useState(0);
  useEffect(() => {
    setCurrImage(Math.floor(Math.random() * 10));
  }, []);

  const remove = async () => {
    const currID = localStorage.getItem("USER_ID");
    console.log(currID);
    deleteProperty(props.property._id, currID, (response) => {
      if (response) {
        alert("success");
      } else {
        alert("You can't delete this property");
      }
    });
  };
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
      <button onClick={() => remove()}>Delete Property</button>
    </div>
  );
};

export default SingleProperty;

import React, { useState, useEffect } from "react";
import deleteProperty from "../mutations/deletePropertyMutation";
import { graphql } from "react-relay";
import { toast } from "react-toastify";

const SingleProperty = (props) => {
  const [currImage, setCurrImage] = useState(0);
  useEffect(() => {
    setCurrImage(Math.floor(Math.random() * 10));
  }, []);

  const remove = async () => {
    const currID = localStorage.getItem("USER_ID");
    const currUser = localStorage.getItem("USERNAME");
    console.log(currID);
    if (currUser === props.property.createdBy) {
      deleteProperty(props.property._id, currID, (response) => {
        if (response) {
          console.log("deleted property");
        } else {
          alert("You can't delete this property");
        }
      });
    } else {
      toast.warning("⚠️ You can only delete your properties!", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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

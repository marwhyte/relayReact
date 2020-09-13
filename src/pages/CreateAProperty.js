import React, { useState, useEffect } from "react";
import createProperty from "../mutations/createNewPropertyMutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateAProperty = (props) => {
  const [address, setAddress] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    setCurrentUser(localStorage.getItem("USERNAME"));
  }, []);

  const create = (e) => {
    e.preventDefault();
    createProperty(
      address,
      numberOfRooms,
      currentUser,
      (id, name, numberOfRooms) => {
        if (id) {
          toast.success(`${name} successfully created`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.warning("⚠️Couldn't create this property!", {
            position: "top-right",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    );
  };
  return (
    <div className="createproperty">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: 14 }}
      />
      <h1>Create A Property</h1>
      <form className="createForm" onSubmit={create}>
        <label>Address</label>
        <input
          className="Address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required="required"
        />
        <label>Number Of Rooms</label>
        <input
          className="numberOfRooms"
          type="number"
          min="0"
          max="100"
          value={numberOfRooms}
          onChange={(e) => setNumberOfRooms(e.target.value)}
          required="required"
        />
        <input className="createNewProp" type="submit" />
      </form>
    </div>
  );
};

export default CreateAProperty;

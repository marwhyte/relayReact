import React, { useState } from "react";
import SingleProperty from "./SingleProperty";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomeProperties = (props) => {
  console.log(props);
  return (
    <div className="propertyList">
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
      {props.getAllProperties.map((property) => {
        return <SingleProperty property={property} key={property._id} />;
      })}
    </div>
  );
};

export default HomeProperties;

import React, { useState } from "react";
import SingleProperty from "./SingleProperty";
const HomeProperties = (props) => {
  console.log(props);
  return (
    <div className="propertyList">
      {props.getAllProperties.map((property) => {
        return <SingleProperty property={property} key={property._id} />;
      })}
    </div>
  );
};

export default HomeProperties;

import React, { useState } from "react";
import HomeProperties from "../components/HomeProperties";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../environment";

const Home = (props) => {
  const GetAllPropertiesQuery = graphql`
    query HomeQuery {
      getAllProperties {
        _id
        name
        numberOfRooms
        createdBy
      }
    }
  `;
  return (
    <QueryRenderer
      environment={environment}
      query={GetAllPropertiesQuery}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return (
            <div>
              <h1>There Was An Error, try Refreshing</h1>
            </div>
          );
        }
        if (!props) {
          return (
            <div>
              <h1>Loading all properties</h1>
            </div>
          );
        }
        return <HomeProperties {...props} />;
      }}
    />
  );
};

export default Home;

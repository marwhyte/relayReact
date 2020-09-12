import { commitMutation, graphql } from "react-relay";
import environment from "../environment";

const mutation = graphql`
  mutation createNewPropertyMutation(
    $name: String
    $numberOfRooms: String
    $createdBy: String
  ) {
    createProperty(
      name: $name
      numberOfRooms: $numberOfRooms
      createdBy: $createdBy
    ) {
      _id
      name
      numberOfRooms
      createdBy
    }
  }
`;

function createProperty(name, numberOfRooms, createdBy, callback) {
  const variables = {
    name,
    numberOfRooms,
    createdBy,
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log("Got A Response.");
      console.log(response);
      const id = response.createProperty._id;
      const name = response.createProperty.name;
      const numberOfRooms = response.createProperty.numberOfRooms;
      const createdBy = response.createProperty.createdBy;
      callback(id, name, numberOfRooms, createdBy);
    },
    onError: (err) => console.error(err),
  });
}

export default createProperty;

import { commitMutation, graphql } from "react-relay";
import environment from "../environment";

const mutation = graphql`
  mutation addPropertyMutation($username: String, $newProperty: String) {
    addProperty(username: $username, newProperty: $newProperty)
  }
`;

function addPropertyMutation(username, newProperty) {
  const variables = {
    username,
    newProperty,
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log("Got A Response");
    },
    updater: (store) => {
      const payload = store.getRootField("addProperty");
      const root = store.getRoot();
      const myProperties = root.getLinkedRecords("myProperties");

      const newNotes = [...myProperties, payload];
      root.setLinkedRecords(newNotes, "notes");
    },
    onError: (err) => console.error(err),
  });
}

export default addPropertyMutation;

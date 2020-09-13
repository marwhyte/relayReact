import { commitMutation, graphql } from "react-relay";
import environment from "../environment";
const mutation = graphql`
  mutation deletePropertyMutation($_id: ID, $userID: String) {
    deleteProperty(_id: $_id, userID: $userID)
  }
`;

function deleteProperty(_id, userID, callback) {
  const variables = {
    _id,
    userID,
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log("Got A Response.");
      console.log(response);
      const didDelete = response.deleteProperty;
      callback(didDelete);
    },
    updater: (store) => {
      const root = store.getRoot();
      const getAllProperties = root.getLinkedRecords("getAllProperties");
      const newGetAllProperties = getAllProperties.filter(
        (v) => v.getValue("_id") !== _id
      );

      root.setLinkedRecords(newGetAllProperties, "getAllProperties");
    },
    onError: (err) => console.error(err),
  });
}

export default deleteProperty;

import { commitMutation, graphql } from "react-relay";
import environment from "../environment";
const mutation = graphql`
  mutation deletePropertyMutation($_id: ID) {
    deleteProperty(_id: $_id)
  }
`;

function deleteProperty(_id, callback) {
  const variables = {
    _id,
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log("Got A Response.");
      console.log(response);
      const id = response.deleteProperty._id;
      callback();
    },
    onError: (err) => console.error(err),
  });
}

export default deleteProperty;

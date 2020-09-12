import { commitMutation, graphql } from "react-relay";
import environment from "../environment";
const mutation = graphql`
  mutation deleteUserMutation($_id: ID) {
    deleteUser(_id: $_id)
  }
`;

function deleteUser(_id, callback) {
  const variables = {
    _id,
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log("Got A Response.");
      console.log(response);
      const id = response.deleteUser._id;
      callback();
    },
    onError: (err) => console.error(err),
  });
}

export default deleteUser;

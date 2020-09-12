import { commitMutation, graphql } from "react-relay";
import environment from "../environment";

const mutation = graphql`
  mutation registerMutation($username: String, $password: String) {
    createUser(username: $username, password: $password) {
      _id
      username
    }
  }
`;

function createUser(username, password, callback) {
  const variables = {
    username,
    password,
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log("Got A Response.");
      console.log(response);
      let id;
      let username;
      if (response.createUser) {
        id = response.createUser._id;
        username = response.createUser.username;
      } else {
        id = null;
        username = null;
      }

      callback(id, username);
    },

    onError: (err) => console.error(err),
  });
}

export default createUser;

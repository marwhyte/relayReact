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
      const id = response.createUser.id;
      const username = response.createUser.username;
      callback(id, username);
    },

    onError: (err) => console.error(err),
  });
}

export default createUser;

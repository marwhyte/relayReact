import { commitMutation, graphql } from "react-relay";
import environment from "../environment";

const mutation = graphql`
  mutation loginMutation($username: String, $password: String) {
    loginUser(username: $username, password: $password) {
      _id
      username
    }
  }
`;

function loginUser(username, password, callback) {
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
      const id = response.createUser._id;
      const username = response.createUser.username;
      callback(id, username);
    },
    onError: (err) => console.error(err),
  });
}

export default loginUser;

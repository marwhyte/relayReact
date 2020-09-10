/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type loginMutationVariables = {|
  username?: ?string,
  password?: ?string,
|};
export type loginMutationResponse = {|
  +loginUser: ?{|
    +_id: ?string,
    +username: string,
  |}
|};
export type loginMutation = {|
  variables: loginMutationVariables,
  response: loginMutationResponse,
|};
*/


/*
mutation loginMutation(
  $username: String
  $password: String
) {
  loginUser(username: $username, password: $password) {
    _id
    username
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      },
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "loginUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "loginMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "loginMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "f199282c8e3fb0f5fa1a3d11cbdcca30",
    "id": null,
    "metadata": {},
    "name": "loginMutation",
    "operationKind": "mutation",
    "text": "mutation loginMutation(\n  $username: String\n  $password: String\n) {\n  loginUser(username: $username, password: $password) {\n    _id\n    username\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'df578b45860c8bb41a57f5b7eabb9919';

module.exports = node;

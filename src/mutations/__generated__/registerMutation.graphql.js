/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type registerMutationVariables = {|
  username?: ?string,
  password?: ?string,
|};
export type registerMutationResponse = {|
  +createUser: ?{|
    +_id: ?string,
    +username: string,
  |}
|};
export type registerMutation = {|
  variables: registerMutationVariables,
  response: registerMutationResponse,
|};
*/


/*
mutation registerMutation(
  $username: String
  $password: String
) {
  createUser(username: $username, password: $password) {
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
    "name": "createUser",
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
    "name": "registerMutation",
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
    "name": "registerMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "4ddaca787f54f746fde5b34ff27925d4",
    "id": null,
    "metadata": {},
    "name": "registerMutation",
    "operationKind": "mutation",
    "text": "mutation registerMutation(\n  $username: String\n  $password: String\n) {\n  createUser(username: $username, password: $password) {\n    _id\n    username\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f895779426eca6a8255b7f639b51eee0';

module.exports = node;

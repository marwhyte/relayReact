/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteUserMutationVariables = {|
  _id?: ?string
|};
export type deleteUserMutationResponse = {|
  +deleteUser: ?boolean
|};
export type deleteUserMutation = {|
  variables: deleteUserMutationVariables,
  response: deleteUserMutationResponse,
|};
*/


/*
mutation deleteUserMutation(
  $_id: ID
) {
  deleteUser(_id: $_id)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "_id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteUser",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1485235eeaee883f4f8adf7eff7bcc65",
    "id": null,
    "metadata": {},
    "name": "deleteUserMutation",
    "operationKind": "mutation",
    "text": "mutation deleteUserMutation(\n  $_id: ID\n) {\n  deleteUser(_id: $_id)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd7382ae74d26a1e586b0bdbf5f982c74';

module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deletePropertyMutationVariables = {|
  _id?: ?string,
  userID?: ?string,
|};
export type deletePropertyMutationResponse = {|
  +deleteProperty: ?boolean
|};
export type deletePropertyMutation = {|
  variables: deletePropertyMutationVariables,
  response: deletePropertyMutationResponse,
|};
*/


/*
mutation deletePropertyMutation(
  $_id: ID
  $userID: String
) {
  deleteProperty(_id: $_id, userID: $userID)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "_id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userID"
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
      },
      {
        "kind": "Variable",
        "name": "userID",
        "variableName": "userID"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteProperty",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deletePropertyMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deletePropertyMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e1812b80d34424020033712289783039",
    "id": null,
    "metadata": {},
    "name": "deletePropertyMutation",
    "operationKind": "mutation",
    "text": "mutation deletePropertyMutation(\n  $_id: ID\n  $userID: String\n) {\n  deleteProperty(_id: $_id, userID: $userID)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a5f7d37f8eafc0b275f4b035b5237332';

module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deletePropertyMutationVariables = {|
  _id?: ?string
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
) {
  deleteProperty(_id: $_id)
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
    "cacheID": "ae923565fe76b8fa0a79d9dab7b4ada7",
    "id": null,
    "metadata": {},
    "name": "deletePropertyMutation",
    "operationKind": "mutation",
    "text": "mutation deletePropertyMutation(\n  $_id: ID\n) {\n  deleteProperty(_id: $_id)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ea3ef5af75e21ec3fb2e19da7d0efa85';

module.exports = node;

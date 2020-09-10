/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addPropertyMutationVariables = {|
  username?: ?string,
  newProperty?: ?string,
|};
export type addPropertyMutationResponse = {|
  +addProperty: ?boolean
|};
export type addPropertyMutation = {|
  variables: addPropertyMutationVariables,
  response: addPropertyMutationResponse,
|};
*/


/*
mutation addPropertyMutation(
  $username: String
  $newProperty: String
) {
  addProperty(username: $username, newProperty: $newProperty)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "newProperty"
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
        "name": "newProperty",
        "variableName": "newProperty"
      },
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "kind": "ScalarField",
    "name": "addProperty",
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
    "name": "addPropertyMutation",
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
    "name": "addPropertyMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "5b6ea627fbe1d0655791cf8b2127c8f4",
    "id": null,
    "metadata": {},
    "name": "addPropertyMutation",
    "operationKind": "mutation",
    "text": "mutation addPropertyMutation(\n  $username: String\n  $newProperty: String\n) {\n  addProperty(username: $username, newProperty: $newProperty)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f579a5554f7e26479c1cf197ab783779';

module.exports = node;

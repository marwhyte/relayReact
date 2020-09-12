/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createNewPropertyMutationVariables = {|
  name?: ?string,
  numberOfRooms?: ?string,
  createdBy?: ?string,
|};
export type createNewPropertyMutationResponse = {|
  +createProperty: ?{|
    +_id: ?string,
    +name: string,
    +numberOfRooms: string,
    +createdBy: string,
  |}
|};
export type createNewPropertyMutation = {|
  variables: createNewPropertyMutationVariables,
  response: createNewPropertyMutationResponse,
|};
*/


/*
mutation createNewPropertyMutation(
  $name: String
  $numberOfRooms: String
  $createdBy: String
) {
  createProperty(name: $name, numberOfRooms: $numberOfRooms, createdBy: $createdBy) {
    _id
    name
    numberOfRooms
    createdBy
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "createdBy"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "numberOfRooms"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "createdBy",
        "variableName": "createdBy"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "numberOfRooms",
        "variableName": "numberOfRooms"
      }
    ],
    "concreteType": "Property",
    "kind": "LinkedField",
    "name": "createProperty",
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "numberOfRooms",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdBy",
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
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createNewPropertyMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "createNewPropertyMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "2dc407c99894dcb6e2e8dba383bb0507",
    "id": null,
    "metadata": {},
    "name": "createNewPropertyMutation",
    "operationKind": "mutation",
    "text": "mutation createNewPropertyMutation(\n  $name: String\n  $numberOfRooms: String\n  $createdBy: String\n) {\n  createProperty(name: $name, numberOfRooms: $numberOfRooms, createdBy: $createdBy) {\n    _id\n    name\n    numberOfRooms\n    createdBy\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f6964e13ba6359104bd1a7efc16b6aa7';

module.exports = node;

load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-typedarray
description: >
  Return a TypedArray object
info: >
  22.2.4.1 TypedArray( )

  This description applies only if the TypedArray function is called with no
  arguments.

  ...
  3. Return ? AllocateTypedArray(constructorName, NewTarget,
  %TypedArrayPrototype%, 0).

  22.2.4.2.1 Runtime Semantics: AllocateTypedArray (constructorName, newTarget,
  defaultProto [ , length ])

  ...
  7. Return obj
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var typedArray = new TA();

  assert.sameValue(typedArray.length, 0);
  assert.sameValue(typedArray.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype);
});

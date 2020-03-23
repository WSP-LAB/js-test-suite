load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("d7d7da2fe1bb153952fa646a08ffb7af.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Non-constructor functions that do not throw a TypeError when invoked via
    `new` do not satisfy the assertion.
includes: [testBuiltInObject.js]
---*/

var threw = false;
var fn = function() {
  throw new Error();
};

try {
  testBuiltInObject(fn, true, false, [], 0);
} catch(err) {
  threw = true;
  if (err.constructor !== Test262Error) {
    $ERROR(
      'Expected a Test262Error, but a "' + err.constructor.name +
      '" was thrown.'
    );
  }
}

if (threw === false) {
  $ERROR('Expected a Test262Error, but no error was thrown.');
}

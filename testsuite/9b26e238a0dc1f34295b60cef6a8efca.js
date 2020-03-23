load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("d7d7da2fe1bb153952fa646a08ffb7af.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Objects that do not define all of the specified "own" properties as
    writable do not satisfy the assertion.
includes: [testBuiltInObject.js]
---*/

var threw = false;
var obj = {};
Object.defineProperty(obj, 'a', {
  writable: true, enumerable: false, configurable: true
});
Object.defineProperty(obj, 'b', {
  writable: false, enumerable: false, configurable: true
});
Object.defineProperty(obj, 'c', {
  writable: true, enumerable: false, configurable: true
});

try {
  testBuiltInObject(obj, false, false, ['a', 'b', 'c']);
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

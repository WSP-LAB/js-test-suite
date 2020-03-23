load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
    Objects whose specified symbol property is enumerable do not satisfy the
    assertion.
includes: [propertyHelper.js]
features: [Symbol]
---*/

var threw = false;
var obj = {};
var s = Symbol('1');
Object.defineProperty(obj, s, {
  enumerable: true
});

try {
  verifyNotEnumerable(obj, s);
} catch(err) {
  threw = true;
  if (err.constructor !== Test262Error) {
    throw new Test262Error(
      'Expected a Test262Error, but a "' + err.constructor.name +
      '" was thrown.'
    );
  }
}

if (threw === false) {
  throw new Test262Error(
    'Expected a Test262Error, but no error was thrown for symbol key.'
  );
}

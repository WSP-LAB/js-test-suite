load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-additional-properties-of-the-object.prototype-object
description: Behavior when [[DefineOwnProperty]] returns an abrupt completion
info: |
    [...]
    5. Perform ? DefinePropertyOrThrow(O, key, desc).
features: [Proxy]
---*/

var noop = function() {};
var thrower = function() {
  throw new Test262Error();
};
var subject = new Proxy({}, { defineProperty: thrower });

assert.throws(Test262Error, function() {
  subject.__defineGetter__('attr', noop);
});

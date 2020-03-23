load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.prototype.propertyIsEnumerable with symbol and toString conversion
info: >
  19.1.3.4 Object.prototype.propertyIsEnumerable ( V )

  1. Let P be ToPropertyKey(V).
  2. ReturnIfAbrupt(P).
  ...
es6id: 19.1.3.4
---*/

var obj = {};
var sym = Symbol();

var callCount = 0;
var wrapper = {
  toString: function() {
    callCount += 1;
    return sym;
  },
  valueOf: function() {
    $ERROR("valueOf() called");
  }
};

obj[sym] = 0;

assert.sameValue(
  obj.propertyIsEnumerable(wrapper),
  true,
  "Returns true if symbol own enumerable property found"
);

assert.sameValue(callCount, 1, "toString method called exactly once");

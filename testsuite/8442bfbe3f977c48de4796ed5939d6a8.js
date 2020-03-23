load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-additional-properties-of-the-object.prototype-object
description: Behavior when "this" value is not extensible
info: |
    [...]
    5. Perform ? DefinePropertyOrThrow(O, key, desc).
---*/

var noop = function() {};
var subject = Object.preventExtensions({ existing: null });

subject.__defineSetter__('existing', noop);

assert.throws(TypeError, function() {
  subject.__defineSetter__('brand new', noop);
});

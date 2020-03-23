load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Objects whose specified property is not writable satisfy the assertion
    outside of strict mode.
includes: [propertyHelper.js]
flags: [noStrict]
---*/

var obj = {};

Object.defineProperty(obj, 'a', {
  writable: false,
  value: 123
});

verifyNotWritable(obj, 'a');

if (obj.a !== 123) {
  $ERROR('`verifyNotWritable` should be non-destructive.');
}

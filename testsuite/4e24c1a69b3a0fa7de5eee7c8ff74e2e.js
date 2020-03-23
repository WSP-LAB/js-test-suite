load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      `Object.prototype.toString` should honor the value of the @@toStringTag
      attribute.
  es6id: 22.1.5.2.2
 ---*/

var iter = [][Symbol.iterator]();

assert.sameValue("[object Array Iterator]", Object.prototype.toString.call(iter));

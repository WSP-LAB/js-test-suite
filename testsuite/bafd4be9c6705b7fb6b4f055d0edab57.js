load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.1.2.1
description: Invoked as a constructor
info: >
    ES6 Section 9.3:

    Built-in function objects that are not identified as constructors do not
    implement the [[Construct]] internal method unless otherwise specified in
    the description of a particular function.
---*/

assert.throws(TypeError, function() {
  new Object.assign({});
});

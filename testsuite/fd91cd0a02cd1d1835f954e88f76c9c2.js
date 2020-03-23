load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2011 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5_A4
description: >
    Function.prototype.bind call the original's internal  [[Call]]
    method rather than its .apply method.
---*/

function foo() {}

var b = foo.bind(33, 44);
foo.apply = function() {
  $ERROR("Function.prototype.bind called original's .apply method");
};
b(55, 66);

load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator "void" uses GetValue
es5id: 11.4.2_A2_T2
description: If GetBase(x) is null, throw ReferenceError
---*/

assert.throws(ReferenceError, function() {
  void x;
});

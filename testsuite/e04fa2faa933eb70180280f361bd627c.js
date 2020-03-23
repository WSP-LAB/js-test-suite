load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    It is an early Reference Error if IsValidSimpleAssignmentTarget of
    LeftHandSideExpression is false.
es6id: 12.14.1
description: Compound "modular division" assignment with non-simple target
negative:
  phase: early
  type: ReferenceError
---*/

1 %= 1;

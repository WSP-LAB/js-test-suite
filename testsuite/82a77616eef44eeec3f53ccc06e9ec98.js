load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    It is an early Reference Error if IsValidSimpleAssignmentTarget of
    UnaryExpression is false.
es5id: 12.5.1
description: Applied to a non-simple assignment target
negative:
  phase: early
  type: ReferenceError
---*/

--1;

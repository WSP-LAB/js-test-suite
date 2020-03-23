load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Assignment Operator calls PutValue(lref, rval)
es5id: S11.13.1_A5_T1
description: >
    Evaluating LeftHandSideExpression lref returns Reference type; Reference
    base value is an environment record and environment record kind is
    object environment record. PutValue(lref, rval) uses the initially
    created Reference even if the environment binding is no longer present.
    Binding in surrounding function environment record is not changed.
flags: [noStrict]
---*/

function testFunction() {
  var x = 0;
  var scope = {x: 1};

  with (scope) {
    x = (delete scope.x, 2);
  }

  if (scope.x !== 2) {
    $ERROR('#1: scope.x === 2. Actual: ' + (scope.x));
  }
  if (x !== 0) {
    $ERROR('#2: x === 0. Actual: ' + (x));
  }
}
testFunction();

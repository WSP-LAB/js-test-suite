load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      `yield` may not be used as the binding identifier of a function
      expression within classes.
  features: [generators]
  es6id: 14.1
  negative:
    phase: early
    type: SyntaxError
 ---*/

class A {
  *g() {
    (function yield() {});
  }
}

load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      `yield` is a reserved keyword within generator function bodies and may
      not be used as a binding identifier.
  features: [generators]
  es6id: 12.1.1
  negative:
    phase: early
    type: SyntaxError
 ---*/

var obj = {
  *g() {
    yield = 1;
  }
};

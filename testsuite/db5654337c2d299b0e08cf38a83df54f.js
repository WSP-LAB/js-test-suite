load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    The Initializer of a SingleNameBinding witihn the FormalParameters of a
    GeneratorMethod may not contain the `yield` keyword.
es6id: 14.4
features: [generators]
flags: [noStrict]
negative:
  phase: early
  type: SyntaxError
---*/

(function*() {
  ({
    *method(x = yield) {}
  });
});

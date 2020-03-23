load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.5
description: >
    class super in static methods
---*/
class B {
  static method() {
    return 1;
  }
  static get x() {
    return 2;
  }
}
class C extends B {
  static method() {
    assert.sameValue(super.x, 2, "The value of `super.x` is `2`");
    return super.method();
  }
}
assert.sameValue(C.method(), 1, "`C.method()` returns `1`");
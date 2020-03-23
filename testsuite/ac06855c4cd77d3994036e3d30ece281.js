load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.5
description: >
    class super in static setter
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
  static set x(v) {
    assert.sameValue(v, 3, "The value of `v` is `3`");
    assert.sameValue(super.x, 2, "The value of `super.x` is `2`");
    assert.sameValue(super.method(), 1, "`super.method()` returns `1`");
  }
}
assert.sameValue(C.x = 3, 3, "`C.x = 3` is `3`");
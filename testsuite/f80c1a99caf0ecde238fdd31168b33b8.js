load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    super method calls in object literal concise generator
---*/
var proto = {
  method() {
    return 42;
  }
};

var object = {
  *g() {
    yield super.method();
  }
};

Object.setPrototypeOf(object, proto);

assert.sameValue(
  object.g().next().value,
  42,
  "The value of `object.g().next().value` is `42`, after executing `Object.setPrototypeOf(object, proto);`, where `object " + String(object) + "`"
);

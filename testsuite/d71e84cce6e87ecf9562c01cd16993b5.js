load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-super-keyword
es6id: 12.3.5
description: Evaluates to the new "this" value
info: |
  [...]
  6. Let result be ? Construct(func, argList, newTarget).
  7. Let thisER be GetThisEnvironment( ).
  8. Return ? thisER.BindThisValue(result).
features: [class]
---*/

var customThisValue = {};
var value;
function Parent() {
  return customThisValue;
}

class Child extends Parent {
  constructor() {
    value = super();
  }
}

new Child();

assert.sameValue(value, customThisValue);

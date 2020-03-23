load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-super-keyword-runtime-semantics-evaluation
es6id: 12.3.5.1
description: Value when invoked via SuperCall
info: |
  SuperCall : super Arguments

  1. Let newTarget be GetNewTarget().
  [...]
  6. Let result be ? Construct(func, argList, newTarget).
  [...]
features: [class]
---*/

var newTarget = null;

class Parent {
  get attr() {
    newTarget = new.target;
  }
}

class Child extends Parent {
  constructor() {
    super();
    super.attr;
  }
}

new Child();

assert.sameValue(newTarget, undefined);

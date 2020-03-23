load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.5.1
description: >
    No restrictions on SuperProperty
---*/
class A {
  constructor() {
    super.toString();
  }
  dontDoThis() {
    super.makeBugs = 1;
  }
}


assert.sameValue(typeof A, "function");

var a = new A();

a.dontDoThis();
assert.sameValue(a.makeBugs, 1);

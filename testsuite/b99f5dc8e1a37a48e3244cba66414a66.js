load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.5.14
description: >
    10. If constructor is empty, then,
      a. If ClassHeritageopt is present, then
        i. Let constructor be the result of parsing the String "constructor(... args){ super (...args);}" using the syntactic grammar with the goal symbol MethodDefinition.
---*/
var args;

class A {
  constructor() {
    args = arguments;
  }
}

class B extends A {
  /*
    The missing constructor is created by the runtime:

    constructor(...args) {
      super(...args);
    }

   */
}

new B(0, 1, 2);


assert.sameValue(args[0], 0);
assert.sameValue(args[1], 1);
assert.sameValue(args[2], 2);


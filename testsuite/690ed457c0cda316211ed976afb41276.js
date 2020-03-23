load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.2
description: >
  Return target result
info: >
  26.1.2 Reflect.construct ( target, argumentsList [, newTarget] )

  ...
  2. If newTarget is not present, let newTarget be target.
  ...
  6. Return Construct(target, args, newTarget).
---*/

var o = {};
function fn() {
  this.o = o;
}

var result = Reflect.construct(fn, []);

assert.sameValue(result.o, o);
assert(result instanceof fn);

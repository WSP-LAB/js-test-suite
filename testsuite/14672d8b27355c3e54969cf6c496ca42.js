load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 25.2
description: >
    When invoked via the function invocation pattern without arguments, the
    GeneratorFunction intrinsic returns a valid generator with an empty body.
---*/

var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;

var g = GeneratorFunction();
var iter = g();
var result = iter.next();

assert.sameValue(result.value, undefined, 'Result `value`');
assert.sameValue(result.done, true, 'Result `done` flag');

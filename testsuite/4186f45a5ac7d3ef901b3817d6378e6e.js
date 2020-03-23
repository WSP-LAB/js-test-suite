load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/*---
es6id: 22.1.3.1_3
description: array-concat-non-array
includes: [compareArray.js]
---*/

//
// test262 --command "v8 --harmony-classes  --harmony_object_literals" array-concat-non-array
//
class NonArray {
  constructor() {
    Array.apply(this, arguments);
  }
}

var obj = new NonArray(1,2,3);
var result = Array.prototype.concat.call(obj, 4, 5, 6);
assert.sameValue(Array, result.constructor);
assert.sameValue(result instanceof NonArray, false);
assert(compareArray(result, [obj,4,5,6]));

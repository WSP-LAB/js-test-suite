load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/*---
es6id: 22.1.3.1_3
description: Array.prototype.concat array like primitive non number length
includes: [compareArray.js]
---*/
var obj = {
  "1": "A",
  "3": "B",
  "5": "C"
};
obj[Symbol.isConcatSpreadable] = true;
obj.length = {toString: function() { return "SIX"; }, valueOf: null };
assert(compareArray([].concat(obj), []));
obj.length = {toString: null, valueOf: function() { return "SIX"; } };
assert(compareArray([].concat(obj), []));

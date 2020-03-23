load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: The body may re-declare variables declared in the head
esid: sec-for-statement
es6id: 13.7.4
---*/

var iterCount = 0;
var first = true;

for (var x; first; first = false) {
  var x;
  iterCount += 1;
}

assert.sameValue(iterCount, 1);

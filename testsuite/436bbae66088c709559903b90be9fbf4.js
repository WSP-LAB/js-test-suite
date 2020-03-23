load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-runtime-semantics-catchclauseevaluation
description: Removal of lexical environment for `catch` parameter
---*/

var probe, x;

try {
  throw 'inside';
} catch (x) {
  probe = function() { return x; };
}
x = 'outside';

assert.sameValue(x, 'outside');
assert.sameValue(probe(), 'inside');

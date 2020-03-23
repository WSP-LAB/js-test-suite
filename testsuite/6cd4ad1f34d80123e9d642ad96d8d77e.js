load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: If abs(base) is 1 and exponent is +∞, the result is NaN.
esid: sec-applying-the-exp-operator
---*/


var exponent = +Infinity;
var base = new Array();
base[0] = -1;
base[1] = 1
var basenum = 2;

for (var i = 0; i < basenum; i++)
{
  assert.sameValue(
    Math.pow(base[i], exponent),
    NaN,
    "(" + base[i] + ", " + exponent + ")"
  );
}

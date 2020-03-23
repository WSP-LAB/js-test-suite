load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: If base is −0 and exponent > 0 and exponent is not an odd integer, the result is +0.
esid: sec-applying-the-exp-operator
---*/


var base = -0;
var exponent = new Array();
exponent[0] = 0.000000000000001;
exponent[1] = 2;
exponent[2] = Math.PI;
exponent[3] = 1.7976931348623157E308; //largest finite number
exponent[4] = +Infinity;
var exponentnum = 5;

for (var i = 0; i < exponentnum; i++)
{
  assert.sameValue(Math.pow(base, exponent[i]), 0, exponent[i]);
}

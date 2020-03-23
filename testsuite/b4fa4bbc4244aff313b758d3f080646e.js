load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2016 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-applying-the-exp-operator
description: If base is −0 and exponent < 0 and exponent is an odd integer, the result is −∞.
---*/


var base = -0;
var exponents = [];
exponents[2] = -1;
exponents[1] = -111;
exponents[0] = -111111;

for (var i = 0; i < exponents.length; i++) {
  if ((base ** exponents[i]) !== -Infinity) {
    $ERROR("(" + base + " **  " + exponents[i] + ") !== -Infinity");
  }
}

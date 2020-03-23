load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: If base is −∞ and exponent > 0 and exponent is an odd integer, the result is −∞.
esid: sec-applying-the-exp-operator
---*/


var base = -Infinity;
var exponent = new Array();
exponent[0] = 1;
exponent[1] = 111;
exponent[2] = 111111;
var exponentnum = 3;

for (var i = 0; i < exponentnum; i++)
{
	if (Math.pow(base,exponent[i]) !== -Infinity)
	{
		$ERROR("#1: Math.pow(" + base + ", " + exponent[i] + ") !== -Infinity");
	}
}

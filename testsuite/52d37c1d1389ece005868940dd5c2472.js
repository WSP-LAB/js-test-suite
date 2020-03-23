load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The initial value of Infinity is Number.POSITIVE_INFINITY
es5id: 15.1.1.2_A1
description: Use typeof, isNaN, isFinite
---*/

// CHECK#1
if (typeof(Infinity) !== "number") {
	$ERROR('#1: typeof(Infinity) === "number". Actual: ' + (typeof(Infinity))); 
}

// CHECK#2
if (isFinite(Infinity) !== false) {
	$ERROR('#2: Infinity === Not-a-Finite. Actual: ' + (Infinity)); 
}

// CHECK#3
if (isNaN(Infinity) !== false) {
	$ERROR('#3: Infinity === Not-a-Number. Actual: ' + (Infinity)); 
}


// CHECK#4
if (Infinity !== Number.POSITIVE_INFINITY) {
	$ERROR('#4: Infinity === Number.POSITIVE_INFINITY. Actual: ' + (Infinity)); 
}

load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: array.forEach can be frozen while in progress
es5id: 15.4.4.18_A1
description: Freezes array.forEach during a forEach to see if it works
---*/

['z'].forEach(function(){ Object.freeze(Array.prototype.forEach); });

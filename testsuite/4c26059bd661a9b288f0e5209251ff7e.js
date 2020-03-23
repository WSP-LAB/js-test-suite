load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: null and undefined source should be ignored,result should be original object.
es6id:  19.1.2.1.5.a
---*/

var target = new Object();
var result = Object.assign(target,undefined,null);

assert.sameValue(result, target, "null and undefined should be ignored, result should be original object.");

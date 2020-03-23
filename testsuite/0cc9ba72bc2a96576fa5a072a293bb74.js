load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: test Object.Assign(target,...sources),only one argument was passed,
             return ToObject(target)
es6id:  19.1.2.1.3
---*/

var target = "a";
var result = Object.assign(target);

assert.sameValue(typeof result, "object");
assert.sameValue(result.valueOf(), "a", "The value should be 'a'.");

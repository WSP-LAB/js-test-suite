load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Source is an object without length property
es6id: 22.1.2.1
---*/

var obj = {
    0: 2,
    1: 4,
    2: 8,
    3: 16
}

var a = Array.from(obj);
assert.sameValue(a.length, 0, "Expected an array of length 0.");

load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ryan Lewis
description: >
    String should return false if a location is passed that is
    greather than the length of the string.
features: [String#includes]
---*/

assert.sameValue('word'.includes('w', 5), false, '"word".includes("w", 5)');

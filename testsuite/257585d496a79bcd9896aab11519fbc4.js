load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ryan Lewis
description: >
    String should return true when called on 'word' and passed 'w' and
    with no location (defaults to 0).
features: [String#includes]
---*/

assert.sameValue('word'.includes('w'), true, '"word".includes("w")');

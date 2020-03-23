load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ryan Lewis
description: >
    endsWith should return false when called on 'word' and passed 'd',
    with an endPosition of 3.
features: [String#endsWith]
---*/

assert.sameValue('word'.endsWith('d', 3), false, '"word".endsWith("d", 3)');

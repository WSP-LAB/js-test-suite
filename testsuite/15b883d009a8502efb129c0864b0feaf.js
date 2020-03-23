load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.8-2-c-2
description: Object.seal - 'O' is an Array object
---*/

        var arr = [0, 1];
        var preCheck = Object.isExtensible(arr);
        Object.seal(arr);

assert(preCheck, 'preCheck !== true');
assert(Object.isSealed(arr), 'Object.isSealed(arr) !== true');

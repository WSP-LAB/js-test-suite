load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.11.4.3-1
description: Error.prototype.message is not enumerable.
---*/

        for (var i in Error.prototype) {
            assert.notSameValue(i, "message", 'i');
        }

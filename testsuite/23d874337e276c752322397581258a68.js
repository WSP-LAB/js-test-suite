load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-2-15
description: >
    Array.prototype.lastIndexOf - 'length' is property of the global
    object
---*/

        var targetObj = {};

            this.length = 2;

            this[1] = targetObj;

assert.sameValue(Array.prototype.lastIndexOf.call(this, targetObj), 1);

            this[1] = {};
            this[2] = targetObj;

assert.sameValue(Array.prototype.lastIndexOf.call(this, targetObj), -1);

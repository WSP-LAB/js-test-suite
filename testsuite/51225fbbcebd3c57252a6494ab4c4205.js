load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-5-12
description: Array.prototype.map - Boolean object can be used as thisArg
---*/

        var objBoolean = new Boolean();

        function callbackfn(val, idx, obj) {
            return this === objBoolean;
        }

        var testResult = [11].map(callbackfn, objBoolean);

assert.sameValue(testResult[0], true, 'testResult[0]');

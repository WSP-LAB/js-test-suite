load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-38
description: >
    Object.create - 'Properties' is an Arguments object which
    implements its own [[Get]] method to access own enumerable
    property (15.2.3.7 step 5.a)
---*/

        var argObj = (function () { return arguments; })();

        argObj.prop = {
            value: 12,
            enumerable: true
        };

        var newObj = Object.create({}, argObj);

assert(newObj.hasOwnProperty("prop"), 'newObj.hasOwnProperty("prop") !== true');

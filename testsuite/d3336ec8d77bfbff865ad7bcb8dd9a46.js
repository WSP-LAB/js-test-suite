load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-293
description: >
    Object.create - 'set' property of one property in 'Properties' is
    a primitive value null (8.10.5 step 8.b)
---*/


assert.throws(TypeError, function() {
            Object.create({}, {
                prop: {
                    set: null
                }
            });
});

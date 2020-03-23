load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-4-a-2-s
description: >
    Strict Mode - TypeError is thrown when deleting non-configurable
    accessor property
flags: [onlyStrict]
---*/

        var obj = {};
        Object.defineProperty(obj, "prop", {
            get: function () {
                return "abc"; 
            },
            configurable: false
        });
assert.throws(TypeError, function() {
            delete obj.prop;
});
assert.sameValue(obj.prop, "abc", 'obj.prop');

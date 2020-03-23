load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-20-2
description: >
    Function.prototype.bind - [[Get]] attribute of 'caller' property
    in 'F' is thrower
---*/

        function foo() { }
        var obj = foo.bind({});

assert.throws(TypeError, function() {
    obj.caller;
});

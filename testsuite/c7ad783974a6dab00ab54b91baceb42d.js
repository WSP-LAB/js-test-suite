load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5.1-4-1
description: >
    [[Call]] - 'F''s [[BoundArgs]] is used as the former part of
    arguments of calling the [[Call]] internal method of 'F''s
    [[TargetFunction]] when 'F' is called
---*/

        var func = function (x, y, z) {
            return x + y + z;
        };

        var newFunc = Function.prototype.bind.call(func, {}, "a", "b", "c");

assert.sameValue(newFunc(), "abc", 'newFunc()');

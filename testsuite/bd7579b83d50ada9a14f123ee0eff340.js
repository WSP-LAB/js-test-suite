load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-16-2
description: >
    Function.prototype.bind - The [[Extensible]] attribute of internal
    property in F set as true
---*/

        function foo() { }
        var obj = foo.bind({});
        obj.property = 12;

assert(obj.hasOwnProperty("property"), 'obj.hasOwnProperty("property") !== true');

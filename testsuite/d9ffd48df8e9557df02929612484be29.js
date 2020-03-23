load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.6-14-1-s
description: Strict Mode - 'callee' exists and 'caller' exists under strict mode
flags: [onlyStrict]
---*/

        var argObj = function () {
            return arguments;
        } ();

assert(argObj.hasOwnProperty("callee"), 'argObj.hasOwnProperty("callee") !== true');
assert(argObj.hasOwnProperty("caller"), 'argObj.hasOwnProperty("caller") !== true');

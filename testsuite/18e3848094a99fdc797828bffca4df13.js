load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.8.3-3gs
description: >
    Strict Mode - octal extension is forbidden in strict mode (after a
    hex number is assigned to a variable from an eval)
negative: SyntaxError
flags: [onlyStrict]
---*/

var a;
eval("a = 0x1;a = 01;");

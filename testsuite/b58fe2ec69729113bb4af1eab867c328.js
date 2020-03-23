load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-5-a-5gs
description: >
    Strict Mode - SyntaxError is thrown when deleting a variable which
    is primitive type(boolean)
negative: SyntaxError
flags: [onlyStrict]
---*/

var _11_4_1_5 = 7;
throw NotEarlyError;
delete _11_4_1_5;

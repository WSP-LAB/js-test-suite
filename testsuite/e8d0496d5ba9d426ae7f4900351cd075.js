load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.8.4-1gs
description: >
    Strict Mode - OctalEscapeSequence(\0110) is forbidden in strict
    mode
negative: SyntaxError
flags: [onlyStrict]
---*/

throw NotEarlyError;
var _7_8_4_2 = '100abc\0110def';

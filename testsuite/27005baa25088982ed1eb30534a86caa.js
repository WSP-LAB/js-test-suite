load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.0_4-5gs
description: >
    Strict Mode - SourceElements is evaluated as strict mode code when
    a FunctionDeclaration is contained in strict mode code
negative: SyntaxError
flags: [onlyStrict]
---*/

throw NotEarlyError;
function _13_0_4_5_fun() { eval = 42; };

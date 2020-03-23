load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.1-1gs
description: >
    Strict Mode - SyntaxError is thrown if the identifier 'eval'
    appears within a FormalParameterList of a strict mode
    FunctionDeclaration
negative: SyntaxError
flags: [onlyStrict]
---*/

throw NotEarlyError;
function _13_1_1_fun(eval) { }

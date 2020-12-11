load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If the parse fails, throw a SyntaxError exception (but see also clause 16)
es5id: 15.1.2.1_A2_T2
description: Checking if execution of "eval("x = 1; x\u000A++")" fails
negative: SyntaxError
---*/

//CHECK#1
var x;
eval("x = 1; x\u000A++");

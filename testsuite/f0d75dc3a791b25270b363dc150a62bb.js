load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.2.1-22-s
description: >
    arguments as global var identifier throws SyntaxError in strict
    mode
---*/

    var indirectEval = eval;
assert.throws(SyntaxError, function() {
	    indirectEval("'use strict'; var arguments;");
});

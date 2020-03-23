load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.8.5-1
description: >
    Literal RegExp Objects - SyntaxError exception is thrown if the
    RegularExpressionNonTerminator position of a
    RegularExpressionBackslashSequence is a LineTerminator.
---*/


assert.throws(SyntaxError, function() {
            eval("var regExp = /\\\rn/;");
});

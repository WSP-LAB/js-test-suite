load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.13.2-6-9-s
description: >
    Strict Mode - SyntaxError is thrown if the identifier eval appear
    as the LeftHandSideExpression of a Compound Assignment operator(&=)
flags: [onlyStrict]
---*/

        var blah = eval;
assert.throws(SyntaxError, function() {
            eval("eval &= 20;");
});
assert.sameValue(blah, eval, 'blah');

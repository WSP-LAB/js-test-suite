load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.3.2-2-1-s
description: >
    Strict Mode - SyntaxError is thrown if the identifier 'arguments'
    appear as a PostfixExpression(arguments--)
flags: [onlyStrict]
---*/

function testcase() {
        var blah = arguments;
        assert.throws(SyntaxError, function() {
            eval("arguments--;");
        });
        assert.sameValue(blah, arguments, 'blah');
    }
testcase();

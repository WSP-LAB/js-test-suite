load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.1-7-s
description: >
    Strict Mode - Use Strict Directive Prologue is ''use strict';'
    which appears at the end of the block
flags: [noStrict]
---*/

function testcase() {
        var public = 1;
        assert.sameValue(public, 1);
        "use strict";
    }
testcase();

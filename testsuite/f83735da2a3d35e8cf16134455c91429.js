load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2-27-s
description: >
    StrictMode - enumerating over a function object looking for
    'arguments' fails outside of the function
flags: [noStrict]
---*/

        function foo () {"use strict";}
        
        for (var tempIndex in foo) {
            assert.notSameValue(tempIndex, "arguments", 'tempIndex');
        }

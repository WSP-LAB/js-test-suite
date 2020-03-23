load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es5id: 10.4.2-1-4
description: >
    Direct call to eval has context set to local context (with block)
flags: [noStrict]
---*/

var __10_4_2_1_4 = "str";
function testcase() {
            var o = new Object();
            o.__10_4_2_1_4 = "str2";
            var __10_4_2_1_4 = "str1";
            with (o) {
                assert(eval("\'str2\' === __10_4_2_1_4"), 'direct eval');
            }
    }
testcase();

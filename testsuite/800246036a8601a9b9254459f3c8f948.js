load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es5id: 10.4.2-1-1
description: Direct call to eval has context set to local context
---*/

var __10_4_2_1_1_1 = "str";
function testcase() {
    var __10_4_2_1_1_1 = "str1";
    assert(eval("\'str1\' === __10_4_2_1_1_1"), 'direct eval');
}
testcase();

load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.3-5
description: >
    7.3 - ES5 recognizes the character <LS> (\u2028) as terminating
    string literal
---*/

        var prop = "66\u2028123";

assert.sameValue(prop, "66\u2028123", 'prop');
assert.sameValue(prop[2], "\u2028", 'prop[2]');
assert.sameValue(prop.length, 6, 'prop.length');

load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.3-15
description: 7.3 - ES5 recognize <BOM> (\uFFFF) as a whitespace character
---*/

        var prop = "a\uFFFFa";

assert.sameValue(prop.length, 3, 'prop.length');
assert.notSameValue(prop, "aa", 'prop');
assert.sameValue(prop[1], "\uFFFF", 'prop[1]');

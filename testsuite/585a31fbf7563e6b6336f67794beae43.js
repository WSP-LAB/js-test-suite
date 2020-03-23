load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    RegularExpressionChar :: BackslashSequence :: \NonTerminator,
    RegularExpressionFlags :: [empty]
es5id: 7.8.5_A2.4_T1
es6id: 11.8.5
description: Check similar to (/a\1/.source === "a\\1")
---*/

assert.sameValue(/a\1/.source, "a\\1");
assert.sameValue(/a\a/.source, "a\\a");

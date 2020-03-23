load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-g6-6
description: >
    The JSON lexical grammer allows 'r' as a JSONEscapeCharacter after
    '' in a JSONString
---*/

assert.sameValue(JSON.parse('"\\r"'), '\r', 'JSON.parse(\'"\\r"\')');

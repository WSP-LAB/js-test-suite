load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-18gs
description: >
    Strict - checking 'this' from a global scope (eval includes strict
    directive prologue)
flags: [noStrict]
---*/

if (eval("\"use strict\";\nthis") !== this) {
    throw "'this' had incorrect value!";
}

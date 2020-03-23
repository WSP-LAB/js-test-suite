load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.2.1-11-3-s
description: >
    Function constructor having a formal parameter named 'eval' throws
    SyntaxError if function body is strict mode
flags: [noStrict]
---*/


assert.throws(SyntaxError, function() {
    Function('eval', '"use strict";');
});

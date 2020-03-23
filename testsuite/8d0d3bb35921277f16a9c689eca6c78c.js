load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.10.2.15-6-1
description: >
    Pattern - SyntaxError was thrown when one character in CharSet 'A'
    greater than one character in CharSet 'B' (15.10.2.15
    CharacterRange step 6)
---*/

assert.throws(SyntaxError, function() {
  var regExp = new RegExp("^[z-a]$");
});

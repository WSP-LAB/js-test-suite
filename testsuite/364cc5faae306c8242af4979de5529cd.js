load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    "This" operator doesn't use GetValue. The operators "delete" and "typeof"
    can be applied to parenthesised expressions
es5id: 11.1.6_A2_T2
description: >
    Applying "delete" operator to an undefined variable
flags: [noStrict]
---*/

//CHECK#1
if (delete (x) !== true) {
  $ERROR('#1: delete (x) === true');
}

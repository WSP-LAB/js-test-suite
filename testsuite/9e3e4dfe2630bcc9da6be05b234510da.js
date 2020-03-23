load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.8.5-1gs
description: Empty literal RegExp should result in a SyntaxError
negative:
  phase: early
  type: SyntaxError
---*/

var re = //;

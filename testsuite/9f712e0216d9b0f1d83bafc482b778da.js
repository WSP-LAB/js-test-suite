load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production Block can't be inside of expression
es5id: 12.1_A4_T1
description: Checking if execution of "y={__func}()" fails
negative:
  phase: early
  type: SyntaxError
---*/

function __func(){};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
y={__func;}();
//
//////////////////////////////////////////////////////////////////////////////

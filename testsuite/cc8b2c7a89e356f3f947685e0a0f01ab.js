load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Block within a "for-in" Expression is not allowed
es5id: 12.6.4_A15
description: Using block within "for-in" Expression
negative:
  phase: early
  type: SyntaxError
---*/

var __arr=[1,2,3];

//////////////////////////////////////////////////////////////////////////////
//CHECK#
for(x in {__arr;}){
   break ;
};
//
//////////////////////////////////////////////////////////////////////////////

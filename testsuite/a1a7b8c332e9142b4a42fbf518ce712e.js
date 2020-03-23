load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Do not crash with postincrement custom property
es5id: 8.6_A2_T2
description: Try to implement postincrement for not declared custom property
---*/

var __map={};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
assert.sameValue(__map.foo++, NaN);
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!("foo" in __map)) {
  $ERROR('#2: var __map={}; "foo" in __map');
}
//
//////////////////////////////////////////////////////////////////////////////

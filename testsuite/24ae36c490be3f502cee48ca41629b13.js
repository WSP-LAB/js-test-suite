load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Do not crash with pefixincrement custom property
es5id: 8.6_A3_T1
description: Try to implement pefixincrement for custom property
---*/

var __map={foo:'bar'};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1

++__map.foo;
assert.sameValue(__map.foo, NaN);
//
//////////////////////////////////////////////////////////////////////////////

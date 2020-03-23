load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "IdentifierPart :: IdentifierStart"
es5id: 7.6_A2.1_T2
description: "IdentifierStart :: $"
---*/

var $ = 1;
assert.sameValue($, 1);

var $x = 2;
assert.sameValue($x, 2);

var $$ = 3;
assert.sameValue($$, 3);

var $_ = 4;
assert.sameValue($_, 4);

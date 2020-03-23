load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "IdentifierStart :: _"
es6id: 11.6
description: The _ as unicode character \u{5F}
---*/

var \u{5F} = 1;

assert.sameValue(_, 1);

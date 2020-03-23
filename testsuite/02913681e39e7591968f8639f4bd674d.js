load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "IdentifierStart :: $"
es6id: 11.6
description: The $ as unicode character \u{24}
---*/

var \u{24} = 1;

assert.sameValue($, 1);

load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.13-2-8
description: Object.isExtensible returns true for all built-in objects (Math)
---*/

  var e = Object.isExtensible(Math);

assert.sameValue(e, true, 'e');

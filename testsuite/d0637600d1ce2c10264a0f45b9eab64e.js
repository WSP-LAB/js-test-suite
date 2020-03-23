load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-5
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Global.parseInt)
---*/

  var global = this;
  var desc = Object.getOwnPropertyDescriptor(global,  "parseInt");

assert.sameValue(desc.value, global.parseInt, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');

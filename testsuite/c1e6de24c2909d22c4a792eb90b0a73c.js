load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.6.4.10_S1.a.i
description: >
    const: invalid assignment in Statement body
---*/

assert.throws(TypeError, function() {
  for (const x in [1, 2, 3]) { x++ }
});

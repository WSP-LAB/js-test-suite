load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Errors thrown during method definition are forwarded to the runtime.
es6id: 14.4.13
features: [generators]
---*/

assert.throws(Test262Error, function() {
  ({
    *[(function() { throw new Test262Error(); }())]() {}
  });
});

load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Behavior if error is thrown when accessing `Symbol.toStringTag` property
es6id: 19.1.3.6
info: >
    16. Let tag be Get (O, @@toStringTag).
    17. ReturnIfAbrupt(tag).
features: [Symbol.toStringTag]
---*/

var poisonedToStringTag = Object.defineProperty({}, Symbol.toStringTag, {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  poisonedToStringTag.toString();
});

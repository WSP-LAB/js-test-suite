load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.3.1.1
description: >
  If the iterable argument is empty, return new WeakMap object.
info: >
  23.3.1.1 WeakMap ( [ iterable ] )

  ...
  9. Repeat
    ...
    d. Let nextItem be IteratorValue(next).
    e. ReturnIfAbrupt(nextItem).
    ...
---*/

var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return {
        get value() {
          throw new Test262Error();
        },
        done: false
      };
    }
  };
};

assert.throws(Test262Error, function() {
  new WeakMap(iterable);
});

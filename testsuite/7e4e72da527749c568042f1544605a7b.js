load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.2.1.1
description: >
    Set ( [ iterable ] )

    When the Set function is called with optional argument iterable the following steps are taken:

    ...
    7. Else,
      a. Let adder be Get(set, "add").
      b. ReturnIfAbrupt(adder).
      c. If IsCallable(adder) is false, throw a TypeError exception.
      d. Let iter be GetIterator(iterable).
      e. ReturnIfAbrupt(iter).
    ...
    9. Repeat
      a. Let next be IteratorStep(iter).
      b. ReturnIfAbrupt(next).
      c. If next is false, return set.
      d. Let nextValue be IteratorValue(next).
      e. ReturnIfAbrupt(nextValue).
      f. Let status be Call(adder, set, «nextValue.[[value]]»).
      g. If status is an abrupt completion, return IteratorClose(iter, status).

---*/

Set.prototype.add = null;

var s = new Set();

assert.sameValue(s.size, 0, "The value of `s.size` is `0`");

load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-initializers-in-forin-statement-heads
description: >
    for-in heads prohibit AssignmentExpressions
negative:
  phase: early
  type: SyntaxError
---*/
var a;
throw NotEarlyError;
for (a = 0 in {});


load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("cf477d228f4ce608cbd07e52409ac325.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Expression is a candidate for tail-call optimization.
esid: static-semantics-hasproductionintailposition
flags: [onlyStrict]
features: [tail-call-optimization]
includes: [tco-helper.js]
---*/

(function() {
  var finished = false;
  function f(_, n) {
    if (n === 0) {
      finished = true;
      return;
    }
    return f`${n-1}`;
  }
  f(null, $MAX_ITERATIONS);
  return finished;
}());

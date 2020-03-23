load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-function-calls-runtime-semantics-evaluation
es6id: 12.3.4.1
description: >
    An eval function from another realm is not a candidate for direct eval
info: |
    [...]
    3. If Type(ref) is Reference and IsPropertyReference(ref) is false and GetReferencedName(ref) is "eval", then
       a. If SameValue(func, %eval%) is true, then
          [...]
flags: [noStrict]
---*/

var x = 'outside';
var result;

(function() {
  var eval = $.createRealm().global.eval;

  eval('var x = "inside";');

  result = x;
}());

assert.sameValue(result, 'outside');

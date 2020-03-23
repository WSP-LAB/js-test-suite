load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-regular-expressions-patterns
es6id: B1.4
description: Quantifiable assertions disallowed with `u` flag
info: |
    The `u` flag precludes quantifiable assertions (even when Annex B is
    honored)

    Term[U] ::
         [~U] QuantifiableAssertion Quantifier
negative:
  phase: early
  type: SyntaxError
---*/

/.(?=.)?/u;

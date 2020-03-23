load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: It is a Syntax Error if IsLabelledFunction(Statement) is true.
negative:
  phase: early
  type: SyntaxError
esid: sec-semantics-static-semantics-early-errors
es6id: 13.7.1.1
info: >
    Although Annex B describes an extension which permits labelled function
    declarations outside of strict mode, this early error is applied regardless
    of the language mode.
---*/

for (var x in {}) label1: label2: function f() {}

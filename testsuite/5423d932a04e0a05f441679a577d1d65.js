load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Statement cannot contain an `export` declaration
esid: sec-modules
negative:
  phase: early
  type: SyntaxError
flags: [module]
---*/

class C { *method() { export default null; } }

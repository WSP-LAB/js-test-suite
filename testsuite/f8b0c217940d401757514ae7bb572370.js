load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-reserved-words
es6id: 11.6.2
description: The `await` token is not permitted as an identifier in module code
flags: [module]
negative:
  phase: early
  type: SyntaxError
---*/

var await;

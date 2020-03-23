load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Jeff Walden
es6id: 13.3.1.1
description: >
    const: |const let| split across two lines is a static semantics early error.
info: >
  Lexical declarations may not declare a binding named "let".
negative:
  phase: early
  type: SyntaxError
---*/

const
let = "irrelevant initializer";

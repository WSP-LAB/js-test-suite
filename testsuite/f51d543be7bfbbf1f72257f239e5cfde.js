load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 15.2.1.1
description: >
    It is a Syntax Error if the BoundNames of ImportDeclaration contains any
    duplicate entries.
flags: [module]
negative:
  phase: early
  type: SyntaxError
---*/

import { x, y as x } from 'z';

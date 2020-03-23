load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.1-8gs
description: >
    Strict Mode - Use Strict Directive Prologue is ''use strict';'
    which appears twice in the code
negative:
  phase: early
  type: SyntaxError
flags: [raw]
---*/

"use strict";
"use strict";
var public = 1;

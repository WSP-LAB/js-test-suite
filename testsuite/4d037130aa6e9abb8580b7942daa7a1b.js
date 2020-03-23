load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.5_4-4-b-1
description: >
    Object literal - No SyntaxError if a data property definition is
    followed by get accessor definition with the same name
---*/

  eval("({foo : 1, get foo(){}});");

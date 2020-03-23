load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.5_4-4-c-1
description: >
    Object literal - No SyntaxError if a get accessor property definition
    is followed by a data property definition with the same name
---*/

  eval("({get foo(){}, foo : 1});");

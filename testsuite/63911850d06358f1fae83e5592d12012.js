load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.5-4-4-a-1-s
description: >
    Object literal - No SyntaxError for duplicate data property names
---*/

  eval("({foo:0,foo:1});");

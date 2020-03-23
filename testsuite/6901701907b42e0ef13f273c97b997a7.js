load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.10.4.1-4
description: RegExp - the SyntaxError is not thrown when flags is 'gim'
---*/

var regExpObj = new RegExp('abc', 'gim');

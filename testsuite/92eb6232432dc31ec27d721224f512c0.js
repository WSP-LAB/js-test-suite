load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise is the Promise property of the global object
es6id: S25.4.3.1_A1.1_T1
author: Sam Mikes
description: Promise === global.Promise
---*/

var global = this;

if (Promise !== global.Promise) {
    $ERROR("Expected Promise === global.Promise.");
}

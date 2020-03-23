load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise prototype object exists, is object, not enumerable, writable,
    or configurable
es6id: S25.4.4.2_A1.1_T1
author: Sam Mikes
description: Promise prototype exists
---*/

if (Promise.prototype === undefined) {
    $ERROR("Expected Promise.prototype to be defined.");
}

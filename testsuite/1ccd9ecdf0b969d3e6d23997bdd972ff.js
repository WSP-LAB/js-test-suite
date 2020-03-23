load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.race returns a new promise
es6id: S25.4.4.3_A2.1_T1
author: Sam Mikes
description: Promise.race returns a new promise
---*/

var p = Promise.race([]);

if (!(p instanceof Promise)) {
    $ERROR("Expected Promise.race([]) to return a promise.");
}

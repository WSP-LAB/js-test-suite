load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.all is callable
es6id: 25.4.4.1_A1.1_T1
author: Sam Mikes
description: Promise.all is callable
---*/

if ((typeof Promise.all) !== "function") {
    $ERROR('Expected Promise.all to be a function');
}

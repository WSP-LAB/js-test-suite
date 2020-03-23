load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2011 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2_A7_T2
description: check if "arguments" poisoning poisons  hasOwnProperty too
flags: [onlyStrict]
---*/

(function(){}).hasOwnProperty('arguments');

load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2011 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2_A6_T1
description: check if "caller" poisoning poisons  getOwnPropertyDescriptor too
flags: [onlyStrict]
---*/

Object.getOwnPropertyDescriptor(function(){}, 'caller');

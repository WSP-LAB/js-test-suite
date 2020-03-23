load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ryan Lewis
description: String should have the property length with size of 1.
features: [String#includes]
---*/

assert.sameValue('word'.includes.length, 1, '"word".includes.length');

load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.getOwnPropertyDescriptors should have length 1
esid: pending
author: Jordan Harband
includes: [propertyHelper.js]
---*/

assert.sameValue(Object.getOwnPropertyDescriptors.length, 1, 'Expected Object.getOwnPropertyDescriptors.length to be 1');

var desc = Object.getOwnPropertyDescriptor(Object.getOwnPropertyDescriptors, 'length');
assertEq(desc.enumerable, false);
assertEq(desc.writable, false);
assertEq(desc.configurable, true);

load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.getOwnPropertyDescriptors should have name property with value 'getOwnPropertyDescriptors'
esid: pending
author: Jordan Harband
includes: [propertyHelper.js]
---*/

assert.sameValue(
    Object.getOwnPropertyDescriptors.name,
    'getOwnPropertyDescriptors',
    'Expected Object.getOwnPropertyDescriptors.name to be "getOwnPropertyDescriptors"'
);

var desc = Object.getOwnPropertyDescriptor(Object.getOwnPropertyDescriptors, 'name');
assertEq(desc.enumerable, false);
assertEq(desc.writable, false);
assertEq(desc.configurable, true);

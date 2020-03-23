load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2013 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
es5id: 13.3.0_6_2
description: >
    Tests that Date.prototype.toLocaleString & Co. use the standard
    built-in Intl.DateTimeFormat constructor.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

taintDataProperty(Intl, "DateTimeFormat");
new Date().toLocaleString();
new Date().toLocaleDateString();
new Date().toLocaleTimeString();

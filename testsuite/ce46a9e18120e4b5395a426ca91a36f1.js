load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-Intl.PluralRules.supportedLocalesOf
description: >
    Tests that Intl.PluralRules.supportedLocalesOf doesn't access
    arguments that it's not given.
author: Zibi Braniecki
includes: [testIntl.js]
---*/

taintDataProperty(Object.prototype, "1");
new Intl.PluralRules("und");

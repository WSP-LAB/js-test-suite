load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2013 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.1_a
description: >
    Tests that constructing a NumberFormat doesn't create or modify
    unwanted properties on the RegExp constructor.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testForUnwantedRegExpChanges(function () {
    new Intl.NumberFormat("de-DE-u-nu-latn");
});

testForUnwantedRegExpChanges(function () {
    new Intl.NumberFormat("de-DE-u-nu-latn", {style: "currency", currency: "EUR"});
});

load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-Intl.PluralRules.prototype.select
description: Tests that select function returns "other" for non finite values.
info:
  1.1.4. ResolvePlural (pluralRules, n)
  (...)
  1.1.4_3. If isFinite(n) is false, then
  1.1.4_3.a. Return "other".
author: Zibi Braniecki

---*/

var invalidValues = [NaN, Infinity, -Infinity];

var pr = new Intl.PluralRules();

invalidValues.forEach(function (value) {
    assert.sameValue(pr.select(value), "other");
});

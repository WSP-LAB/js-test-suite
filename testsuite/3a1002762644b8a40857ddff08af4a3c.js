load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-Intl.PluralRules.prototype.resolvedOptions
description: >
    Tests that the object returned by
    Intl.PluralRules.prototype.resolvedOptions  has the right
    properties.
author: Zibi Braniecki
includes: [testIntl.js]
---*/

var actual = new Intl.PluralRules().resolvedOptions();

var actual2 = new Intl.PluralRules().resolvedOptions();
if (actual2 === actual) {
    $ERROR("resolvedOptions returned the same object twice.");
}

// this assumes the default values where the specification provides them
mustHaveProperty(actual, "locale", isCanonicalizedStructurallyValidLanguageTag);
mustHaveProperty(actual, "type", ["cardinal"]);
mustNotHaveProperty(actual, "currency");
mustNotHaveProperty(actual, "currencyDisplay");
mustHaveProperty(actual, "minimumIntegerDigits", [1]);
mustHaveProperty(actual, "minimumFractionDigits", [0]);
mustHaveProperty(actual, "maximumFractionDigits", [3]);
mustNotHaveProperty(actual, "minimumSignificantDigits");
mustNotHaveProperty(actual, "maximumSignificantDigits");

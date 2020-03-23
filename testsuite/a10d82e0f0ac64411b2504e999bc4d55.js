load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 9.2.5_6
description: >
    Tests that the behavior of a Record is not affected by
    adversarial  changes to Object.prototype.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

taintProperties(["dataLocale", "nu", "ca", "co", "locale"]);

testWithIntlConstructors(function (Constructor) {
    var locale = new Constructor(undefined, {localeMatcher: "lookup"}).resolvedOptions().locale;
    if (!isCanonicalizedStructurallyValidLanguageTag(locale)) {
        $ERROR("Constructor returns invalid locale " + locale + ".");
    }

    return true;
});

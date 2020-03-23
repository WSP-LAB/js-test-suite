load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 9.2.6_4
description: >
    Tests that LookupSupportedLocales returns an empty list when
    given an empty list.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testWithIntlConstructors(function (Constructor) {
    // this test should work equally for both matching algorithms
    ["lookup", "best fit"].forEach(function (matcher) {
        var supported = Constructor.supportedLocalesOf([], {localeMatcher: matcher});
        if (supported.length !== 0) {
            $ERROR("SupportedLocales with matcher " + matcher + " returned a non-empty list for an empty list.");
        }
    });

    return true;
});

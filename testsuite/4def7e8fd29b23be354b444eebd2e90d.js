load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 6.2.2_b
description: Tests that language tags with "_" are not accepted.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

var invalidLanguageTags = [
    "de_DE",
    "DE_de",
    "cmn_Hans",
    "cmn-hans_cn",
    "es_419",
    "es-419-u-nu-latn-cu_bob",
    "i_klingon",
    "cmn-hans-cn-t-ca-u-ca-x_t-u",
    "enochian_enochian",
    "de-gregory_u-ca-gregory",
    "de-tester-Tester",  // Case-insensitive duplicate variant subtag
    "de-DE-u-kn-true-U-kn-true",  // Case-insensitive duplicate singleton subtag
];

testWithIntlConstructors(function (Constructor) {
    invalidLanguageTags.forEach(function (tag) {
        var error;
        try {
            // this must throw an exception for an invalid language tag
            var obj = new Constructor([tag]);
        } catch (e) {
            error = e;
        }
        if (error === undefined) {
            $ERROR("Invalid language tag " + tag + " was not rejected.");
        } else if (error.name !== "RangeError") {
            $ERROR("Invalid language tag " + tag + " was rejected with wrong error " + error.name + ".");
        }
    });
    return true;
});

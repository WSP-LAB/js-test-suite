load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that language tags with invalid subtag sequences are not accepted.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

var invalidLanguageTags = [
    "", // empty tag
    "i", // singleton alone
    "x", // private use without subtag
    "u", // extension singleton in first place
    "419", // region code in first place
    "u-nu-latn-cu-bob", // extension sequence without language
    "hans-cmn-cn", // "hans" could theoretically be a 4-letter language code,
                   // but those can't be followed by extlang codes.
    "cmn-hans-cn-u-u", // duplicate singleton
    "cmn-hans-cn-t-u-ca-u", // duplicate singleton
    "de-gregory-gregory", // duplicate variant
    "*", // language range
    "de-*", // language range
    "中文", // non-ASCII letters
    "en-ß", // non-ASCII letters
    "ıd" // non-ASCII letters
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


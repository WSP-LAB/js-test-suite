load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that structurally valid language tags are accepted.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

var validLanguageTags = [
    "de", // ISO 639 language code
    "de-DE", // + ISO 3166-1 country code
    "DE-de", // tags are case-insensitive
    "cmn", // ISO 639 language code
    "cmn-Hans", // + script code
    "CMN-hANS", // tags are case-insensitive
    "cmn-hans-cn", // + ISO 3166-1 country code
    "es-419", // + UN M.49 region code
    "es-419-u-nu-latn-cu-bob", // + Unicode locale extension sequence
    "i-klingon", // grandfathered tag
    "cmn-hans-cn-t-ca-u-ca-x-t-u", // singleton subtags can also be used as private use subtags
    "enochian-enochian", // language and variant subtags may be the same
    "de-gregory-u-ca-gregory", // variant and extension subtags may be the same
    "aa-a-foo-x-a-foo-bar", // variant subtags can also be used as private use subtags
    "x-en-US-12345", // anything goes in private use tags
    "x-12345-12345-en-US",
    "x-en-US-12345-12345",
    "x-en-u-foo",
    "x-en-u-foo-u-bar"
];

testWithIntlConstructors(function (Constructor) {
    validLanguageTags.forEach(function (tag) {
        // this must not throw an exception for a valid language tag
        var obj = new Constructor([tag]);
    });
    return true;
});


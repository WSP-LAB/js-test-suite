load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that canonicalization of locale lists treats undefined and empty lists the same.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

testWithIntlConstructors(function (Constructor) {
    var supportedForUndefined = Constructor.supportedLocalesOf(undefined);
    var supportedForEmptyList = Constructor.supportedLocalesOf([]);
    if (supportedForUndefined.length !== supportedForEmptyList.length) {
        $ERROR("Supported locales differ between undefined and empty list input.");
    }
    // we don't compare the elements because length should be 0 - let's just verify that
    if (supportedForUndefined.length !== 0) {
        $ERROR("Internal test error: Assumption about length being 0 is invalid.");
    }
    return true;
});


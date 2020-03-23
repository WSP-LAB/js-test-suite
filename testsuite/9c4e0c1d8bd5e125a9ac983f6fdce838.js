load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that the array returned by SupportedLocales is extensible,
 *     but its properties are non-writable/non-configurable.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

function testFrozenProperty(obj, property) {
    var desc = Object.getOwnPropertyDescriptor(obj, property);
    if (desc.writable) {
        $ERROR("Property " + property + " of object returned by SupportedLocales is writable.");
    }
    if (desc.configurable) {
        $ERROR("Property " + property + " of object returned by SupportedLocales is configurable.");
    }
}

testWithIntlConstructors(function (Constructor) {
    var defaultLocale = new Constructor().resolvedOptions().locale;
    var supported = Constructor.supportedLocalesOf([defaultLocale]);
    if (!Object.isExtensible(supported)) {
        $ERROR("Object returned by SupportedLocales is not extensible.");
    }
    for (var i = 0; i < supported.length; i++) {
        testFrozenProperty(supported, i);
    }
    testFrozenProperty(supported, "length");

    return true;
});


load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 9.2.8_1_c
description: Tests that the option localeMatcher is processed correctly.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testWithIntlConstructors(function (Constructor) {
    var defaultLocale = new Constructor().resolvedOptions().locale;
    
    var validValues = [undefined, "lookup", "best fit", {toString: function () { return "lookup"; }}];
    validValues.forEach(function (value) {
        var supported = Constructor.supportedLocalesOf([defaultLocale], {localeMatcher: value});
    });
    
    var invalidValues = [null, 0, 5, NaN, true, false, "invalid"];
    invalidValues.forEach(function (value) {
        var error;
        try {
            var supported = Constructor.supportedLocalesOf([defaultLocale], {localeMatcher: value});
        } catch (e) {
            error = e;
        }
        if (error === undefined) {
            $ERROR("Invalid localeMatcher value " + value + " was not rejected.");
        } else if (error.name !== "RangeError") {
            $ERROR("Invalid localeMatcher value " + value + " was rejected with wrong error " + error.name + ".");
        }
    });
    
    return true;
});

load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that the currency style can not be used without a specified currency.
 * @author Norbert Lindenberg
 */

var defaultLocale = new Intl.NumberFormat().resolvedOptions().locale;

function expectError(f) {
    var error;
    try {
        f();
    } catch (e) {
        error = e;
    }
    if (error === undefined) {
        $ERROR("Invalid currency value " + value + " was not rejected.");
    } else if (error.name !== "TypeError") {
        $ERROR("Invalid currency value " + value + " was rejected with wrong error " + error.name + ".");
    }
}

expectError(function () {
        return new Intl.NumberFormat([defaultLocale], {style: "currency"});
});
expectError(function () {
        return new Intl.NumberFormat([defaultLocale + "-u-cu-krw"], {style: "currency"});
});


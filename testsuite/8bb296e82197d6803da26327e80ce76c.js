load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that localeCompare rejects values that can't be coerced to an object.
 * @author Norbert Lindenberg
 */

var invalidValues = [undefined, null];
 
invalidValues.forEach(function (value) {
    var error;
    try {
        var result = String.prototype.localeCompare.call(value, "");
    } catch (e) {
        error = e;
    }
    if (error === undefined) {
        $ERROR("String.prototype.localeCompare did not reject this = " + value + ".");
    } else if (error.name !== "TypeError") {
        $ERROR("String.prototype.localeCompare rejected this = " + value + " with wrong error " + error.name + ".");
    }
});

